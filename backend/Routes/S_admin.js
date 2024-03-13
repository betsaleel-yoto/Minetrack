const passport = require('passport');
const authenticate = require('../authenticationFunction/authenticate-jwt')
const initializePassport = require('../authenticationFunction/passport-jwt-strategy');
const express = require("express");
const router = express.Router();

initializePassport(passport)

router.get('',(req,res)=>{
  
})
router.post('/Signup',authenticate)

router.post('/Login',(req,res)=>{
  res.send('bonjour Login')
})


router.put('',(req,res)=>{
  
})

module.exports= router