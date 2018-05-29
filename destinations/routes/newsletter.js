var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//newsletter page
router.get('/', function(req, res, next){
  res.render('pages/newsletter',{title: 'Sign Up!'});
});


module.exports = router;
