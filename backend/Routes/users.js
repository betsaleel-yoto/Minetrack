const {UserSignup,UserLogin} = require('../Controllers/UserControllers')
const express = require("express");
const router = express.Router();

const {getAll}=require('../Models/UserModel')

router.get('/getAll',getAll);

router.post('/Signup',UserSignup );

router.post('/Login',UserLogin );

router.put('/edit',(req,res)=>{

});

router.delete('/delete',(req,res)=>{

})

module.exports= router;
