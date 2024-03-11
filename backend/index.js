const express = require("express");
const app = express();
const port = 3000;
const sAdminSignup = require("./Routes/signUp_sAdmin");
const Login = require("./Routes/Login");
const Users = require("./Routes/users");
const Vehicle = require("./Routes/vehicle");
const Materials = require("./Routes/materials");
const RoutePlanning = require("./Routes/RoutePlanning");
const Shipments = require("./Routes/Shipments");
// route

app.use(express.json());
app.use(express.urlencoded({ extende: true }));
app.use("/sAdminSignup", sAdminSignup);
app.use("/login", Login);
app.use("/users", Users);
app.use("/vehicle", Vehicle);
app.use("/materials", Materials);
app.use("/routePlanning", RoutePlanning);
app.use("/shipments", Shipments);
app.listen(port, () => {
  console.log("le serveur a démaré au port" + port);
});
