const express = require("express");
const router = express.Router();
const {sAdminSignup,sAdminLogin}=require('../Controllers/SadminControllers')
const {getAll,edit,delet}=require('../Models/sAdminModel')

router.get('/getAll',getAll)

router.post('/Signup',sAdminSignup)

router.post('/Login', sAdminLogin);


router.put('/edit/:matriculation',edit)

router.delete('/delete/:matriculation',delet)

module.exports= router
