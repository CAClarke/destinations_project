var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//homepage
router.get('/', function(req, res, next){
  res.render('./pages/index',{title: 'Home'});
});

// //destination page
// router.get('/destination', function(req, res, next){
//   res.render('./views/pages/destination',{title: 'Explore'});
// });

// //newsletter page
// router.get('/newsletter', function(req, res, next){
//   res.render('./views/pages/newsletter',{title: 'Newsletter'});
// });

// //create destination page
// router.get('/create', function(req, res, next){
//   res.render('./views/pages/create',{title: 'New Destination'});
// });


module.exports = router;
