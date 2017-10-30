//Constantes
const express = require('express');
const app = express();
const path_module = require('path');
const path = __dirname;

//Configuración de la carpeta public para servir estaticos
app.use(express.static('public'));

//Enrutado de un json
app.get('/json', function(req,res){
	res.json({'pruebaJson': 'yes'});
})

//Configuración del main
app.get('/', function(req,res){
	res.sendFile(path + '/views/index.html');
})

app.listen(8080, function(req,res){
	console.log("Listening port 8080...");
});