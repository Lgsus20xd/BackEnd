//Para gestionar la conexióna  la base de datos uso Mongoose

const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

//OJO- CAMBIAR ESTO A VARIABLES DE ENTORNO
const passwordDB = 1234;
const nameDB = "AppEjemplo";

const uri = `mongodb+srv://admin:${passwordDB}@appejemplo.udd95.mongodb.net/${nameDB}?retryWrites=true&w=majority`;


mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err => console.errorerr));

module.exports =mongoose;
