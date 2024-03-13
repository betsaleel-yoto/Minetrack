const passport = require('passport');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = function authenticateJWT(req, res, next) {
  passport.authenticate('jwt', async (err, user, info) => {
    try {
      // Vérifie s'il s'agit d'une demande de connexion
      if (req.path === '/Login' && user) {
        // Si c'est une demande de connexion et que l'utilisateur est authentifié, génére le token JWT
        const token = jwt.sign({
          matricule: user.matriculationNumber
        }, 'zehfgueurfyerfieuyfui', { expiresIn: '1h' });

        return res.json({ token });
      }

      // Si ce n'est pas une demande de connexion ou que l'utilisateur n'est pas authentifié, passer au middleware suivant
      if (err || !user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Si c'est une demande d'inscription et que l'utilisateur est créé avec succès, renvoyer une réponse 201
      if (req.path === '/Signup' && user) {
        return res.status(201).json(user);
      }

      // Par défaut, générer le token JWT
      const token = jwt.sign({
        matricule: user.matriculationNumber
      }, 'zehfgueurfyerfieuyfui', { expiresIn: '1h' });

      return res.json({ token });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
