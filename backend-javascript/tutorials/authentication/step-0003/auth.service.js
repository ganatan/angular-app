const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET;
const tokenExpiration = process.env.JWT_EXPIRATION || '1h';

// Générer un token JWT
function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: tokenExpiration,
  });
}

// Vérifier un token JWT
function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null; // ou une gestion d'erreur spécifique
  }
}

// Hasher le mot de passe
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// Vérifier le mot de passe
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  verifyPassword,
};
