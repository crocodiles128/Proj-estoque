require('dotenv/config');

module.exports = {
  jwtSecret: process.env.JWT_SECRET || '',//mudar para mesma do .env ou .env.exemple
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS || 10),
};
