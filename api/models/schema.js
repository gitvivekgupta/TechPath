
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({

  Name: {
    type:String,
    required: true
  },

  email: {
    type:String,
    required: true
  },
                
  password: {
    type:String,
    required: true
  }
});

var User = mongoose.model("user", UserSchema);
module.exports = User;
