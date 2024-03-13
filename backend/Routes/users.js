const passport = require('passport');
const jwt = require('jsonwebtoken');
const initializePassport = require('../authenticationFunction/passport-jwt-strategy');
const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

initializePassport(passport);

router.get('',(req,res)=>{
  
});

router.post('/Signup', async (req,res) => {
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
    
    // Générer le JWT avec le matricule de l'utilisateur
    const token = jwt.sign({
      matricule: user.matriculationNumber
    }, 'zehfgueurfyerfieuyfui', { expiresIn: '1h' });
    
    // Renvoyer le token dans la réponse
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' })
  }
});

router.post('/Login', async (req, res) => {
  try {
    // Récupérer le token depuis le corps de la requête ou l'en-tête d'autorisation
    const token = req.body.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Décoder le token pour obtenir le matricule
    const decoded = jwt.verify(token, 'zehfgueurfyerfieuyfui');
    const matricule = decoded.matricule;

    // Rechercher le matricule dans la base de données
    const user = await prisma.User.findUnique({
      where: {
        matriculationNumber: matricule
      }
    });

    if (user) {
      return res.json({ message: 'Oui, il existe' });
    } else {
      return res.json({ message: 'Non, il n\'existe pas' });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du token :', error);
    return res.status(401).json({ message: 'Token verification failed' });
  }
});

router.put('',(req,res)=>{
  
});

module.exports= router;
