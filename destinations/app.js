var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const fileupload = require('express-fileupload');

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


//add mongoose db
var mongoose = require('mongoose');
// var Post = require('./models/Post');

// connect to db
    mongoose.connect('mongodb://Carrie_Codespace:silver61086@ds119080.mlab.com:19080/blog_posts');

// // set the view engine to ejs
// app.set('view engine', 'ejs');


// app.listen(3000);

module.exports = app;
