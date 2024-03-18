const express = require("express");
const router = express.Router();
const {sAdminSignup,sAdminLogin}=require('../Controllers/SadminControllers')
const {getAll}=require('../Models/sAdminModel')

router.get('/getAll',getAll)

router.post('/Signup',sAdminSignup)

router.post('/Login', sAdminLogin);


router.put('/edit',(req,res)=>{
  
})

module.exports= router
