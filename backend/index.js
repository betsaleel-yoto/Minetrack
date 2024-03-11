const express = require("express");
const app = express();
const port= 3000;
const sAdminLogin=require('./Routes/signUp_sAdmin')
app.use('/sAdminLogin',sAdminLogin)
app.listen(port,()=>{
  console.log('le serveur a démaré au port' + port);
})