const passport = require('passport');
const jwt = require('jsonwebtoken');
const initializePassport = require('../authenticationFunction/passport-jwt-strategy');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

initializePassport(passport);

const UserSignup = async (req,res) => {
  const { matriculationNumber, UserName, UserRole, UserTitle, matriculationNumberSadmin } = req.body;
  try {
    const user = await prisma.User.create({
      data: {
        matriculationNumber,
        UserName,
        UserRole,
        UserTitle,
        matriculationNumberSadmin
      },
    });

    // Ne génère pas le token ici

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' })
  }
}

const UserLogin = async (req, res) => {
  try {
    const { matriculationNumber } = req.body;

    // Rechercher l'utilisateur dans la base de données
    const user = await prisma.User.findUnique({
      where: {
        matriculationNumber
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Générer le JWT avec le matricule de l'utilisateur, valide pendant 24 heures
    const token = jwt.sign({
      matricule: user.matriculationNumber
    }, 'zehfgueurfyerfieuyfui', { expiresIn: '24h' });

    return res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'utilisateur :', error);
    return res.status(500).json({ error: 'Erreur lors de la connexion de l\'utilisateur' });
  }
}

const ProtectedResource = async (req, res) => {
  try {
    // Vérifier le token
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Décoder le token pour obtenir le matricule
    const decoded = jwt.verify(token, 'zehfgueurfyerfieuyfui');
    const matricule = decoded.matricule;

    // Rechercher l'utilisateur dans la base de données
    const user = await prisma.User.findUnique({
      where: {
        matriculationNumber: matricule
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Si l'utilisateur est valide, autoriser l'accès à la ressource protégée
    return res.json({ message: 'Protected resource accessed successfully' });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Si le token a expiré, renvoyer un message demandant de se reconnecter
      return res.status(401).json({ message: 'Token expired, please log in again' });
    } else {
      console.error('Erreur lors de l\'accès à la ressource protégée :', error);
      return res.status(401).json({ message: 'Access to protected resource failed' });
    }
  }
}

module.exports = {
  UserSignup,
  UserLogin,
  ProtectedResource
}
