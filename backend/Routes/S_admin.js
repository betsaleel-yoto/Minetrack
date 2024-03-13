const passport = require('passport');
const jwt = require('jsonwebtoken');
const authenticate = require('../authenticationFunction/authenticate-jwt')
const initializePassport = require('../authenticationFunction/passport-jwt-strategy');
const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

initializePassport(passport)

router.get('',(req,res)=>{
  
})

router.post('/Signup', async (req,res) => {
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
    }, 'zehfgueurfyerfieuyfui', { expiresIn: '1h' });
    
    // Renvoyer le token dans la réponse
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Erreur lors de la création du SuperAdmin :', error);
    res.status(500).json({ error: 'Erreur lors de la création du SuperAdmin' })
  } finally {
    await prisma.$disconnect();
  }
})

router.post('/Login', authenticate)

router.put('',(req,res)=>{
  
})

module.exports= router
