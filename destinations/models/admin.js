const mongoose = require ('mongoose');

// //connect to db
// mongoose.connect('mongodb://Carrie_Codespace:silver61086@ds237610.mlab.com:37610/destinations_prj');
//create schema for db quote

var adminSchema = mongoose.Schema({
  username: String,
  useremail: String
});
//create model from schema
var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;