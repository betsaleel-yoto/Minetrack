const express = require("express");
const app = express();
const port= 3000;

app.get('/',(req,res)=>{
  res.set('Content-Type','application/json')
  res.send({
    nom:'Betsaleel',
    post:'Yoto'
  })
})
app.listen(port,()=>{
  console.log('le serveur a démaré au port' + port);
})