var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//create destination page
router.get('/', function(req, res, next){
  res.render('pages/create',{title: 'New Destination'});
});


module.exports = router;
