const express = require("express");
const router = express.Router();

router.get('',(req,res)=>{
  
})
router.post('/Signup',(req,res)=>{
res.send('bonjour Signup')
})

router.post('/Login',(req,res)=>{
  res.send('bonjour Login')
})


router.put('',(req,res)=>{
  
})

module.exports= router