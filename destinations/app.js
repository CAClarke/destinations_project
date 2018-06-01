var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const mongoose = require ('mongoose');

//connect to db
mongoose.connect('mongodb://Carrie_Codespace:silver61086@ds237610.mlab.com:37610/destinations_prj');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var destinationRouter = require('./routes/destination');
var createRouter = require('./routes/create');
var newsletterRouter = require('./routes/newsletter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//watches SASS
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/destination', destinationRouter);
app.use('/create', createRouter);
app.use('/newsletter', newsletterRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// //POST request from post page to new server
// app.post('/newsletter_signups', function(req, res){
//   //get values
//   let signup_name = req.body.signup_name;
//   let signup_email = req.body.signup_email;
  

//   // //   let post = (author, title, content);
//   // res.json({message: 'New sign up received!',
//   // post:post});
  
//   //save signups
//   var newSignup = new Signup();
//   newSignup.signup_name = req.body.signup_name;
//   newSignup.signup_email = req.body.signup_email;

//  

// app.listen(3000);

module.exports = app;
