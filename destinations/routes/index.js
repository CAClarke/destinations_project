var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//homepage
router.get('/', function(req, res, next){
  res.render('pages/index',{title: 'Tri Tours'});
});



module.exports = router;
