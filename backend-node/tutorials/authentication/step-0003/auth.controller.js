const express = require('express');
const { generateToken, hashPassword, verifyPassword } = require('./auth.service');

const router = express.Router();

// Exemple de modèle utilisateur (simplifié)
let users = [];

// Route d'inscription
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };
  users.push(newUser);

  const token = generateToken(newUser);
  res.status(201).json({ token });
});

// Route de connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  const validPassword = await verifyPassword(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
});

module.exports = router;
