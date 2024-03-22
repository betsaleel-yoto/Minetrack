const passport = require('passport');
const jwt = require('jsonwebtoken');
const initializePassport = require('../authenticationFunction/passport-jwt-strategy');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

initializePassport(passport);

const sAdminSignup= async (req,res) => {
  const {matriculationNumber,username}=req.body
  try {
    const superAdmin = await prisma.superAdmin.create({
      data: {
        matriculationNumber,
        username
      },
    });
    console.log('SuperAdmin créé :', superAdmin);
    
    // Générer le JWT avec le matricule du superAdmin
    const token = jwt.sign({
      matricule: superAdmin.matriculationNumber
    }, 'zehfgueurfyerfieuyfui', { expiresIn: '24h' });
    
    // Renvoyer le token dans la réponse
    return res.status(201).json({ token,data:superAdmin });
  } catch (error) {
    console.error('Erreur lors de la création du SuperAdmin :', error);
    res.status(500).json({ error: 'Erreur lors de la création du SuperAdmin' })
  } finally {
    await prisma.$disconnect();
  }
}

const sAdminLogin = async (req, res) => {
  try {
    // Récupérer le token depuis le corps de la requête ou l'en-tête d'autorisation
    const token = req.body.token || req.headers.authorization?.split(' ')[1];

    // Récupérer matriculationNumber et username depuis le corps de la requête
    const { matriculationNumber, username } = req.body;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Décoder le token pour obtenir le matricule
    const decoded = jwt.verify(token, 'zehfgueurfyerfieuyfui');
    const matricule = decoded.matricule;

    // Rechercher le matricule dans la base de données
    const superAdmin = await prisma.superAdmin.findUnique({
      where: {
        matriculationNumber: matricule
      }
    });

    // Vérifier si le superAdmin existe et si les informations matriculationNumber et username correspondent
    if (superAdmin && superAdmin.matriculationNumber === matriculationNumber && superAdmin.username === username) {
      return res.json({ message: 'Oui, il existe' });
    } else {
      return res.json({ message: 'Non, il n\'existe pas' });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du token :', error);
    return res.status(401).json({ message: 'Token verification failed' });
  }
}


module.exports={
sAdminSignup,sAdminLogin
}