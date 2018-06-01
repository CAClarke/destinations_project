var express = require('express');
var router = express.Router();
var Destination = require('../models/new_destination,');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');

//create destination page
router.get('/', function(req, res, next){
  res.render('pages/create',{title: 'New Destination'});
});

//handle file uploads
router.post('/', function(req, res, next) {
  console.log(req.files);

    //  // // get parameters
    // router.get('/', function(req, res, next) {
    //   var destination_id = req.param('id');
    //   console.log(destination_id);

    //   res.send(user_id);
    // });

  if(req.files){
    let destination_img1 = req.files.destination_img1;
    let destination_img2 = req.files.destination_img2;
    let destination_img3 = req.files.destination_img3;
    let backdrop_img = req.files.backdrop_img;

    destination_img1.mv('./public/images/' +destination_img1.name, function (err){
    
      if(err)
      return res.status(500).send(err);

    });
  
    destination_img2.mv('./public/images/' +destination_img2.name, function (err){
    
    if(err)
    return res.status(500).send(err);

  });

  destination_img3.mv('./public/images/' +destination_img3.name, function (err){
    
    if(err)
    return res.status(500).send(err);

    res.send('uploaded');
    console.log('file uploaded');
  });

  backdrop_img.mv('./public/images/' +backdrop_img.name, function (err){
    
    if(err)
    return res.status(500).send(err);

    res.send('uploaded');
    console.log('file uploaded');
  });
}else{
  res.send('No files present')
};

var destination = new Destination();
  destination.city = req.body.destination_city;
  destination.text = req.body.destination_text;
  destination.long = req.body.destination_long;
  destination.lat = req.body.destination_lat;

  destination.destination_img1 = req.files.destination_img1.name;
  destination.destination_img2 = req.files.destination_img2.name;
  destination.destination_img3 = req.files.destination_img3.name;
  destination.backdrop_img = req.files.backdrop_img.name;

  destination.save(function (err) {
    if (err) return handleError(err);

      res.redirect('/create');
      
    });

    
  
});  

module.exports = router;