const express = require("express");
const router = express.Router();
const {sAdminSignup,sAdminLogin}=require('../Controllers/SadminControllers')


router.get('',(req,res)=>{
  
})

router.post('/Signup',sAdminSignup)

router.post('/Login', sAdminLogin);


router.put('',(req,res)=>{
  
})

module.exports= router
