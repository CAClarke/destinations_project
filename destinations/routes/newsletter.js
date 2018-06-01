var express = require('express');
var router = express.Router();
var Signup = require('../models/signups');
const mongoose = require('mongoose');

//newsletter page
router.get('/', function(req, res, next){
  res.render('pages/newsletter',{title: 'Sign Up!'});
});

router.post('/', function(req,res,next){
  var signup = new Signup();
    signup.name = req.body.signup_name;
    signup.email = req.body.signup_email;

  signup.save(function (err) {
    if (err) return handleError(err);

      res.redirect('/')
    });
});

module.exports = router;
