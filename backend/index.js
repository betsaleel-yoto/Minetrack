const express = require("express");
const app = express();
const port = 3000;
const sAdmin = require("./Routes/S_admin");
const Users = require("./Routes/users");
const Vehicle = require("./Routes/vehicle");
const Materials = require("./Routes/materials");
const RoutePlanning = require("./Routes/RoutePlanning");
const Shipments = require("./Routes/Shipments");
const Orders = require("./Routes/Orders");
<<<<<<< HEAD
// routes
=======

// route
>>>>>>> develop





app.use(express.json());
// app.use(express.urlencoded({ extende: true }));

app.use("/sAdmin",sAdmin);
app.use("/users", Users);
app.use("/vehicle", Vehicle);
app.use("/materials", Materials);
app.use("/routePlanning", RoutePlanning);
app.use("/shipments", Shipments);
app.use("/orders",Orders);
app.listen(port, () => {
  console.log("le serveur a démaré au port" + port);
});
