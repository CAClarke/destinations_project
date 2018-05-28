var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const fileupload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// //add mongoose db
// var mongoose = require('mongoose');
// var Post = require('./models/Post');

//connect to db
    // mongoose.connect('mongodb://Carrie_Codespace:silver61086@ds119080.mlab.com:19080/blog_posts');

// // set the view engine to ejs
// app.set('view engine', 'ejs');


// //POST request from post page to new server
// app.post('/posts', function(req, res){
//   //get values
//   let author = req.body.author;
//   console.log(author)
//   let title = req.body.title;
//   let content = req.body.content;
//   let post = {author,
//       title,
//       content
//   };

//   //   let post = (author, title, content);
//   res.json({message: 'Post received!',
//   post:post});
  
//   //save posts
//   var newPost = new Post();
//   newPost.title = req.body.title;
//   newPost.author = req.body.author;
//   newPost.content = req.body.content;

//   //get data values
//   newPost.save(function(error){
//       if (error){
//           res.send(error);
      
//           res.redirect('/posts');
          
//       };
//   });
// });
//   //direct to new page, eg and archive

// //archive page
// app.get('/archive', function(req, res){


//   //get posts from db
//   Post.find(function(error, posts){
//       if(error)
//           res.send(error);

//       let data = {
//           title: "All Posts",
//           posts: posts
//       }
//       res.render('pages/archive', data);
//   });

// });

// //get single post by id
// app.get('/posts/:post_id',function(req,res){
//    let post_id = req.param.post_id;
   
//    Post.findById(post_id, function(error, post){
//        if(error){
//            res.send(error);
//        }
//        else{
//            res.render('pages/post',{
//                t11itle: post.title,
//                post:post
//            });
//        }
//    });
// });

// //edit post
// app.get('/posts/:post_id/edit', function(req,res){

//   Post.findById(req.params.post_id, function(error, post){
//       if(error){
//           res.send(error);
//       }
//       else{
//           res.render('pages/edit',{
//               title: post.title,
//               post:post
//           });
//       }
//   });
// });
// //UPDATE SINGLE POST
// app.post('/posts/:post_id/', function (req, res) {


//   Post.findById(req.params.post_id, function (err, post) {
//       if (err) {
//           res.send(err);
//       }
//       else {

//           post.title = req.body.title;
//           post.author = req.body.author;
//           post.content = req.body.content;
//           post.save(function (err) {
//               if (err)
//                   res.send(err);



//           res.render('pages/edit', {
//               title: post.title,
//               post: post
//           });
//       });
//   }
//   });

// });

// //delete post
// app.get('/posts/:post_id/delete', function(req, res){
//   Post.deleteOne({_id:req.params.post_ide},function(errpr){
//       if(error)
//           return handleError(error);
//           res.redirect('/posts');
//   });

// // Post.findById(req.params.post_id, function(error, post){
// //         if(error){
// //             res.send(error)
// //         }else{
// //             post.remove();
// //             res.redirect('/posts')
// //          }
// //     })
// });

app.listen(3001);

module.exports = app;
