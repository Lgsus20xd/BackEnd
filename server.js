
const express = require('express');
const morgan = require('morgan'); //paa ver las peticiones al servidor por consola
const path = require('path');
const { mongoose } = require ('./database/database')


const app = express();

//Settings 

app.set('port', process.env.PORT || 4000);  //Indicando que tome el puerto dado por el sistema o el 4000

//Middlewares (funciones que se ejcutan antes de llegar a las rutas)

app.use(morgan('dev'));
app.use(express.json()); //Permite verificar que lo que llega es formato Json



//Routes

app.use(require('./Routes/TaskRoutes'));


//Static File





//Iniciar el servidor

app.listen(app.get('port'), () =>{
    console.log(`Server on por ${app.get('port')}`);
    
})