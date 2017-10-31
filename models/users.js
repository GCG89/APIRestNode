/** Modelo de nuestra API que crea la estructura para 
 * realizar POST a nuestra API
**/
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
	name: String,
	email: String,
	phone: Number,
	message: String
})

module.exports = mongoose.model('Users', UserSchema);
