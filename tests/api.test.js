/**
 * Script de teste automatizado para a API Proj-Estoque.
 *
 * Uso:
 *   1. Garanta que o servidor esteja rodando (npm start ou docker)
 *   2. Execute: node tests/api.test.js
 *
 * Requer Node.js 18+ (fetch nativo).
 */

const BASE_URL = process.env.API_URL || 'http://localhost:300000';

let totalTests = 0;
let passedTests = 0;
let authToken = null;

async function request(method, path, body = null, token = null) {
  const url = `${BASE_URL}${path}`;
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = { method, headers };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  let data = null;

  try {
    data = await response.json();
  } catch {
    try {
      data = await response.text();
    } catch {
      data = null;
    }
  }

  return { status: response.status, data };
}

async function runTest(name, fn) {
  totalTests++;
  const label = `[${String(totalTests).padStart(2, '0')}]`;
  process.stdout.write(`  ${label} ${name} ... `);

  try {
    await fn();
    passedTests++;
    console.log('\x1b[32mOK\x1b[0m');
  } catch (err) {
    console.log('\x1b[31mFALHOU\x1b[0m');
    console.log(`       \x1b[31m${err.message}\x1b[0m`);
  }
}

// ---------------------------------------------------------------------------
// Testes
// ---------------------------------------------------------------------------

async function testHealth() {
  const { status, data } = await request('GET', '/health');
  if (status !== 200) throw new Error(`Status esperado 200, recebido ${status}`);
  if (!data || data.status !== 'ok') {
    throw new Error(`Resposta esperada { status: "ok" }, recebido ${JSON.stringify(data)}`);
  }
}

async function testRegister() {
  const email = `teste_${Date.now()}@email.com`;
  const { status, data } = await request('POST', '/auth/register', {
    nome: 'Usuário Teste',
    email,
    password: '123456',
    cargo: 'testador',
  });

  if (status !== 201) throw new Error(`Status esperado 201, recebido ${status}`);
  if (!data || !data.user) throw new Error('Resposta deve conter "user"');
  if (!data || !data.token) throw new Error('Resposta deve conter "token"');
  if (data.user.email !== email) {
    throw new Error(`Email não confere: esperado ${email}, recebido ${data.user.email}`);
  }
}

async function testLogin() {
  const email = `login_${Date.now()}@email.com`;
  const password = 'abcdef';

  // Registrar primeiro
  const reg = await request('POST', '/auth/register', {
    nome: 'Login Test',
    email,
    password,
  });
  if (reg.status !== 201) throw new Error('Falha ao registrar usuário para teste de login');

  // Login
  const { status, data } = await request('POST', '/auth/login', { email, password });
  if (status !== 200) throw new Error(`Status esperado 200, recebido ${status}`);
  if (!data || !data.user) throw new Error('Resposta deve conter "user"');
  if (!data || !data.token) throw new Error('Resposta deve conter "token"');

  authToken = data.token;
}

async function testProfile() {
  if (!authToken) throw new Error('Token JWT não disponível');

  const { status, data } = await request('GET', '/auth/me', null, authToken);
  if (status !== 200) throw new Error(`Status esperado 200, recebido ${status}`);
  if (!data || !data.user) throw new Error('Resposta deve conter "user"');
  if (!data.user.email) throw new Error('Resposta deve conter "user.email"');
}

async function testListItens() {
  if (!authToken) throw new Error('Token JWT não disponível');

  const { status, data } = await request('GET', '/itens', null, authToken);
  if (status !== 200) throw new Error(`Status esperado 200, recebido ${status}`);
  if (!Array.isArray(data)) throw new Error(`Resposta deve ser um array, recebido ${typeof data}`);
}

// ---------------------------------------------------------------------------
// Execução
// ---------------------------------------------------------------------------

async function run() {
  console.log('');
  console.log('  \x1b[36m========================================\x1b[0m');
  console.log('  \x1b[36m   TESTE DA API - Proj-Estoque           \x1b[0m');
  console.log('  \x1b[36m========================================\x1b[0m');
  console.log(`  URL: ${BASE_URL}`);
  console.log('');

  await runTest('GET  /health', testHealth);
  await runTest('POST /auth/register', testRegister);
  await runTest('POST /auth/login', testLogin);
  await runTest('GET  /auth/me (auth)', testProfile);
  await runTest('GET  /itens (auth)', testListItens);

  console.log('');
  console.log('  \x1b[36m----------------------------------------\x1b[0m');
  const color = passedTests === totalTests ? '\x1b[32m' : '\x1b[33m';
  console.log(`  ${color}Resultado: ${passedTests}/${totalTests} testes passaram.\x1b[0m`);
  console.log('');

  process.exit(passedTests === totalTests ? 0 : 1);
}

run().catch((err) => {
  console.error('\n  \x1b[31mErro fatal:\x1b[0m', err.message);
  process.exit(1);
});