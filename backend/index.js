const express = require("express");
const app = express();
const port= 3000;
const sAdminSignup=require('./Routes/signUp_sAdmin')

app.use(express.json())
app.use(express.urlencoded({extende:true}))
app.use('/sAdminSignup',sAdminSignup)
app.use('/sAdminLogin',sAdminSignup)
app.listen(port,()=>{
  console.log('le serveur a démaré au port' + port);
})