const passport = require('passport');
const initializePassport = require('./passport-jwt-strategy');

// Initialisation de Passport avec la stratégie JWT
initializePassport(passport);

// Fonction d'authentification
const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de l\'authentification.' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Token invalide. Accès refusé.' });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { passport, authenticate };
