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

    //         //    destination_backdrop: destination.destination_backdrop,
    //         //    destination_city: destination.destination_city,
    //         //    destination_text: destination.destination_text,
    //         //    destination_long: destination.destination_long,
    //         //    destination_lat: destination.destination_lat,
    //         //    destination_img1 = destination.destination_img1,
    //         //    destination_img2 = destination.destination_img2,
    //         //    destination_img3 = destination.destination_img3,
    //         //    backdrop_img = destination.backdrop_img
            });
            
      });
  //    var destination = new Destination();
  //  destination.backdrop = req.body.destination_backdrop;
  //  destination.city = req.body.destination_city;
  //  destination.text = req.body.destination_text;
  //  destination.long = req.body.destination_long;
  //  destination.lat = req.body.destination_lat;
  //  destination.gallery = req.body.destination_img;
    // });



    // // get parameters
    // router.get('/destinations', function(req, res, next) {
    //   var destination_id = req.param('id');
    //   var destination_backdrop = req.param('backdrop');
    //   var destination_city = req.param('city');  
    //   var destination_text = req.param('text');  
    //   var destination_long = req.param('long');  
    //   var destination_lat = req.param('lat');  
    //   var destination_img = req.param('gallery');  

    //   res.send(user_id);
    // });
    
//   res.render('pages/destination',{title: 'Explore', items: 'resultsArray'});

// // });
// });






module.exports = router;
