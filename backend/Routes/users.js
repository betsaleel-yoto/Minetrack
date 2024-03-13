const {UserSignup,UserLogin} = require('../Controllers/UserControllers')
const express = require("express");
const router = express.Router();

const {getAll,edit}=require('../Models/UserModel')

router.get('/getAll',getAll);

router.post('/Signup',UserSignup );

router.post('/Login',UserLogin );

router.put('/edit/:matriculation',edit);

router.delete('/delete',(req,res)=>{

})

module.exports= router;
