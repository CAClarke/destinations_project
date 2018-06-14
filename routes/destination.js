var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Destination = require('../models/new_destination,');

// //destination page
// router.get('/', function(req, res, next){

   //get single post by id
  router.get('/',function(req,res){
    //  get id parameter
      var destination_id = req.param('id');

      console.log(destination_id);

    Destination.findById({_id:destination_id}, function(error, destinations){
      console.log(destinations);
        if(error){
            res.send(error);
        }
        else{
            res.render('pages/destination',{title: 'Explore', destinations:destinations}
          )};
        });     
  });

module.exports = router;
