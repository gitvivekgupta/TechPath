
// const passport = require('passport');
// var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var express = require('express');
// const Joi = require('joi');

var router = express.Router();

require('../models/schema');


/* GET signup data */
module.exports.user_sign_up = (req, res) => {

      Name = req.body.username;
      email = req.body.email;
      password = req.body.password;
      cpassword = req.body.cpassword;

      console.log(email);
      console.log(password);
      console.log(cpassword);

      req.checkBody('Name', 'Name is required').notEmpty();
      req.checkBody('email', 'Email is required').notEmpty();
      req.checkBody('password', 'Password is required').notEmpty();
      req.checkBody('cpassword', 'Passwords do not match').equals(req.body.password);

      let errors = req.validationErrors();

      if (err) {

        console.log("Please try Again");
      }

      else {

        let newUser = new User({
          Name:Name,
          email:email,
          password:password
        })
      }

      bcrypt.genSalt(10, (err, salt) => {

        bcrypt.hash(newUser.password, salt, (err, hash) => {

          if(err) {

            console.log(err);
          }

          newUser.password = hash;

          newUser.save((err) => {

            if(err) {

              console.log(err);
              return;
            }

            else {

              req.flash('success', 'Welcome to TechPath');
              req.redirect('/blog');
            }

          })

        });

      })
};





// var sendJSONresponse = function(res, status, content) {
//   res.status(status);
//   res.json(content);
// };






// /* GET signin data */
// module.exports.userlogin = function(req, res) {

//   console.log('signing-in', req.body);

//   var email = req.body.email,
//   password = req.body.pwd;

//   Users.find(
//   {
//       email: email, 
//       password: password 
//   })
//   .then(function (user) {
    
//     if (!user) {
//       res.redirect('/');
//       alert("user not found");
//     } 
    
//     else {
//       req.session.user = user.dataValues;
//       res.redirect('/blog');
//       sendJSONresponse(res, 400, 'Welcome');
//     }
//   });

//   if (err) {
//     alert(err);
//     sendJSONresponse(res, 400, err);
//   } 
// };








































