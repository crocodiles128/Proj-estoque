#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const databaseConfig = require('./src/config/database');

const MIGRATIONS_DIR = path.join(__dirname, 'src', 'database', 'migrations');
const TABLE_CONTROL = '_migrations';

async function getExecutedMigrations(sequelize) {
  const queryInterface = sequelize.getQueryInterface();

  const tableExists = await queryInterface
    .showAllTables()
    .then((tables) => tables.includes(TABLE_CONTROL));

  if (!tableExists) {
    await sequelize.query(`
      CREATE TABLE ${TABLE_CONTROL} (
        id SERIAL PRIMARY KEY,
        filename VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    return [];
  }

  const [rows] = await sequelize.query(
    `SELECT filename FROM ${TABLE_CONTROL} ORDER BY id`
  );
  return rows.map((r) => r.filename);
}

async function markExecuted(sequelize, filename) {
  await sequelize.query(
    `INSERT INTO ${TABLE_CONTROL} (filename) VALUES (?)`,
    { replacements: [filename] }
  );
}

async function migrate() {
  const sequelize = new Sequelize(databaseConfig);

  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados.\n');

    const executed = await getExecutedMigrations(sequelize);
    const files = fs
      .readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    if (files.length === 0) {
      console.log('Nenhum arquivo de migration encontrado.');
      await sequelize.close();
      return;
    }

    let pending = files.filter((f) => !executed.includes(f));

    if (pending.length === 0) {
      console.log('Todas as migrations já foram executadas.');
      await sequelize.close();
      return;
    }

    console.log(`Migrations pendentes: ${pending.length}\n`);

    for (const file of pending) {
      const filePath = path.join(MIGRATIONS_DIR, file);
      const sql = fs.readFileSync(filePath, 'utf8').trim();

      if (!sql) {
        console.log(`  ↦ ${file} — vazio, ignorando.`);
        await markExecuted(sequelize, file);
        continue;
      }

      try {
        console.log(`  ▶ Executando: ${file} ...`);
        await sequelize.query(sql);
        await markExecuted(sequelize, file);
        console.log(`  ✓ ${file} — OK`);
      } catch (err) {
        console.error(`  ✗ ${file} — ERRO: ${err.message}`);
        await sequelize.close();
        process.exit(1);
      }
    }

    console.log('\nTodas as migrations foram executadas com sucesso.');
  } catch (err) {
    console.error('Erro de conexão com o banco:', err.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

async function status() {
  const sequelize = new Sequelize(databaseConfig);

  try {
    await sequelize.authenticate();

    const executed = await getExecutedMigrations(sequelize);
    const files = fs
      .readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    console.log('\n=== Status das Migrations ===\n');

    for (const file of files) {
      const status = executed.includes(file) ? '✓' : '—';
      console.log(`  [${status}] ${file}`);
    }

    console.log(
      `\nTotal: ${files.length} | Executadas: ${executed.length} | Pendentes: ${files.length - executed.length}`
    );
  } catch (err) {
    console.error('Erro de conexão com o banco:', err.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

function showHelp() {
  console.log(`
Uso: node commands.js <comando>

Comandos disponíveis:
  migrate    Executa todas as migrations pendentes
  status     Exibe o status de cada migration
  help       Mostra esta mensagem de ajuda
`);
}

async function main() {
  const comando = process.argv[2];

  switch (comando) {
    case 'migrate':
      await migrate();
      break;
    case 'status':
      await status();
      break;
    case 'help':
    case '--help':
    case '-h':
    case undefined:
      showHelp();
      break;
    default:
      console.error(`Comando desconhecido: "${comando}"`);
      showHelp();
      process.exit(1);
  }
}

main();