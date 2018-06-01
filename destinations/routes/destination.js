var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Destination = require('../models/new_destination,');

//destination page
router.get('/', function(req, res, next){
  destination_id = 1;
   //get posts from db
    Destination.findById(destination_id, function(error, post){
      if(error){
        res.send(error);
    }
    else{
        res.render('pages/destination',{
           destination_backdrop: destination.destination_backdrop,
           destination_city: destination.destination_city,
           destination_text: destination.destination_text,
           destination_long: destination.destination_long,
           destination_lat: destination.destination_lat,
           destination_gallery: destination.destination_gallery}
        )};            


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
    
  res.render('pages/destination',{title: 'Explore'});
});
});

// var assert = require('assert');
// router.get('/egt-data',function(req,res,next){
//   var resultArray= [];
//   mongo.connect(url,function(err,db){
//     assert.equal(null,err);
//     var cursor = db.collection('collection-name').find();
//     cursor.forEach(function(doc,err){
//       assert.(null, err);
//       resultArray.push(doc);

//     }, function(){
//       db.close();
//       res.render(index, {items:resultArray});
//     });
//   });
// });


// var url = 'mongoose:';
// router.post('/insert', function(req,res,next){
//   var item = {
//     title:req.body.title,
//     content:req.body.content,
//     author:req.body.author
//   };
//   mongo.connect(url,function(err,db){
//     assert.equal(null,err);
//     db.collection('collection-name').insertOne(item,function(){
//       assert.equal(null,error);
//       consol.log('item inserted');
//       db.close();
//     });
//   });
// })
 
//  //get id
//  let this_url =window.location.href;
//       console.log(this_url)
//       var url_string = this_url;
//       console.log(url_string)
//       var url = new URL(url_string);
//       var id = url.searchParams.get("id");
//       console.log(id);


//       $.getJSON('http://localhost:3000/posts?id='+id, function(posts){
//         //loop to display
//         for(post of posts){
//         var article_title =(post.article_title);
//         var article_author =(post.article_author);
//         var article_date =(post.article_date);
//         var article_text =(post.article_text);
//         var article_img =(post.article_img);
//         var article_id =(post.article_id);

//         $('.article_container').append('<div class="article_text"> <h1 class="article_title">' + article_title + '</h1> <p class="article_author">' + article_author + '</p> <p class="article_date">' + article_date + '</p> <p>' + article_text + '</p> </div> <img src="' + article_img + '" alt="article image" class="article_image">');
//       };//loop end

  
//    //get single post by id
//    app.get('/destinations/:post_id',function(req,res){
//        let destination_id = req.param.post_id;
       
//        Post.findById(destination_id, function(error, post){
//            if(error){
//                res.send(error);
//            }
//            else{
//                res.render('pages/post',{
//                   destination_backdrop: destination.destination_backdrop,
//                   destination_city: destination.destination_city,
//                   destination_text: destination.destination_text,
//                   destination_long: destination.destination_long,
//                   destination_lat: destination.destination_lat,
//                   destination_gallery: destination.destination_gallery
//                });
//            }
        //var destination = new Destination();
      // destination.backdrop = req.body.destination_backdrop;
      // destination.city = req.body.destination_city;
      // destination.text = req.body.destination_text;
      // destination.long = req.body.destination_long;
      // destination.lat = req.body.destination_lat;
      // destination.gallery = req.body.destination_img;
//        });
//    });


module.exports = router;
