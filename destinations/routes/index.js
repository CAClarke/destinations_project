var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Destination = require('../models/new_destination,');

//homepage
router.get('/', function(req, res, next){

  Destination.find({}, function(error, destinations){
    console.log(destinations);
      if(error){
          res.send(error);
      }
      else{
          res.render('pages/index',{title: 'city', destinations:destinations}
        )};


});

  // res.render('pages/index',{title: 'Tri Tours'});
});



module.exports = router;
