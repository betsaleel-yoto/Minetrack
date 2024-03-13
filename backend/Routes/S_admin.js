const express = require("express");
const router = express.Router();
const {sAdminSignup,sAdminLogin}=require('../Controllers/SadminControllers')
const {getAll,edit}=require('../Models/sAdminModel')

router.get('/getAll',getAll)

router.post('/Signup',sAdminSignup)

router.post('/Login', sAdminLogin);


router.put('/edit/:matriculation',edit)

module.exports= router
