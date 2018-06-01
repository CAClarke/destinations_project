var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

//create schema for db 
var signupsSchema = mongoose.Schema ({
  name: String,
  email: String
});
//create model from schema
var Signup = mongoose.model('Signup', signupsSchema);

module.exports = Signup;