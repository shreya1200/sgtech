//main file
const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
//exporting mongodb file (package import)
const {mongoose} = require('./db.js');

//exporting prodcontroller
var prodController = require('./controllers/prodcontroller.js');


var app = express();

//middleware for bodyparser
app.use(bodyparser.json());
//middleware for cors
app.use(cors());

//port number
const port =3000;


//starting the server
app.listen(port, () =>
{
    console.log("server started at port 3000");
});


app.use('/', prodController);