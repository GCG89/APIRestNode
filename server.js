/** Logica del servidor
*	llama al modulo de App y configura una conexión a MongoDB a partir 
*   de Mongoose
**/
const mongoose = require('mongoose');
const app = require('./app')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/api', {useMongoClient: true}, function(err, res){
	if(err){
		console.log("Error al conectar a la BBDD")
	}else{
		console.log("Conectado a la BBDD");
		app.listen(8080, function(req,res){
		console.log("Listening port 8080...");
	});
	}
})

