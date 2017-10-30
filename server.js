//Constantes
const express = require('express');
const path_module = require('path');
const bodyParser = require("body-parser");
const app = express();
const path = __dirname;

/**
* Configuración de la carpeta public y el bodyParser para recuperar 
* elementos del form
*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());

app.get('/json', function(req,res){
	res.json({'pruebaJson': 'yes'});
})

/*
* Enrutamiento del main y del users para recuperar los datos 
* desde el formulario
*/
app.get('/', function(req,res){
	res.sendFile(path + '/views/index.html');
})

app.post("/users", function(req,res){
	console.log("Nombre " + req.body.user.name);
	console.log("Email " + req.body.user.email);
	console.log("Phone " + req.body.user.phone);
	console.log("Message " + req.body.user.message);
	res.send("Datos enviados");
})

app.listen(8080, function(req,res){
	console.log("Listening port 8080...");
});