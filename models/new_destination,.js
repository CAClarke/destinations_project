var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

//create schema for db quote
var destinationsSchema = mongoose.Schema({
    city: String,
    text: String,
    long: Number,
    lat: Number,
    destination_img1: String,
    destination_img2: String,
    destination_img3: String,
    backdrop_img: String
});
//create model from schema
var Destination = mongoose.model('Destination', destinationsSchema);

module.exports = Destination;