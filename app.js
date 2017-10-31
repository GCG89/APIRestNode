/** Modulo de Express donde estan las funcionalidades
* definidas en cada enrutamiento, requerimos del modulo del 
* controlador para llamar a las metodos a ejectuar en cada ruta
**/
'use strict'
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const UserCtrl = require('./controllers/users')
const path_module = require('path');
const path = __dirname;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.sendFile(path + '/views/index.html');
})

app.get('/api/users', UserCtrl.getUsers)
app.put('/api/users/:userId', UserCtrl.updateUser)
app.get('/api/users/:userId', UserCtrl.getUser)
app.delete('/api/users/:userId', UserCtrl.deleteUser)
app.post("/api/users", UserCtrl.saveUser)

module.exports = app