const {UserSignup,UserLogin} = require('../Controllers/UserControllers')
const express = require("express");
const router = express.Router();

router.get('',(req,res)=>{
  
});

router.post('/Signup',UserSignup );

router.post('/Login',UserLogin );

router.put('',(req,res)=>{
  
});

module.exports= router;
