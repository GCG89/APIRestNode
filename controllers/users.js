/** Controlador de la API importamos el model para 
* poder realizar el post a partir del schema y definimos cada funcionalidad
* para usarlo en nuestra app
**/
'use strict'

const Users = require('../models/users')

function getUser (req, res){
	let userId = req.params.userId
	Users.findById(userId, function(err, user){
	if(err) return res.status(500).send({message: 'Error al realizar la peticion'})
			
	res.status(200).send({ user })
		
	})
}

function getUsers (req, res){
	Users.find({}, function(err, users){
		if(err) return res.status(500).send({message: 'Error al realizar la peticion'})

		res.status(200).send({users});		
	})
}

function updateUser (req,res){
	let userId = req.params.userId
	let update = req.body
	Users.findByIdAndUpdate(userId, update, function(error, userUpdated){
		if(error) res.status(500).send({message: 'Error al actualizar el ususario'})

		res.status(200).send({ user: userUpdated})
	})
}

function saveUser(req, res){
	console.log('POST /users')
	console.log(req.body);

	let user = new Users();
	user.name = req.body.user.name;
	user.email = req.body.user.email;
	user.phone = req.body.user.phone;
	user.message = req.body.user.message;

	user.save(function(error, userStored){
		if(error) res.status(500).send({message: 'Error al guardar usuario'})
	
		res.status(200).send({user: userStored});
		
	})
}

function deleteUser (req,res){
	let userId = req.params.userId
	Users.findById(userId, function(err, user){
		if(err) res.status(500).send({message: 'Error al encontrar el usuario: ${err}'})

		user.remove(err =>{
			if(err)  res.status(500).send({message: 'Error al borrar el usuario'})

			res.status(200).send({message: 'User eliminado'})

		})

	})
}

module.exports = {
	getUser,
	getUsers,
	updateUser,
	saveUser,
	deleteUser
}