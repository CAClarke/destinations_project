var express = require('express');
var router = express.Router();

//homepage
router.get('/', function(req, res, next){
  res.render('pages/index',{title: 'Tri Tours'});
});



module.exports = router;
