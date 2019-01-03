
const passport = require('passport');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var express = require('express');
const Joi = require('joi');

var router = express.Router();

require('../models/schema');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};




/* GET signup data */
module.exports.usersignup = (req, res) => {

  if (req.body.Name && req.body.email && req.body.password) {

    var userData = {
      Name: req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    //hashing a password before saving it to the database
    UserSchema.pre('save', (next) => {
      var user = this;

      bcrypt.hash(user.password, 10, (err, hash) => {

        if (err) {
          return next(err);
        }
      
        user.password = hash;
        next();
      })

    });

    //use schema.create to insert data into the db
    User.create(userData, (err, user) => {
      
      if (err) {
        return next(err);
      } 
      
      else {
        return res.redirect('/blog');
      }
    });
  }

};



























/* GET signin data */
module.exports.userlogin = function(req, res) {

  console.log('signing-in', req.body);

  var email = req.body.email,
  password = req.body.pwd;

  Users.find(
  {
      email: email, 
      password: password 
  })
  .then(function (user) {
    
    if (!user) {
      res.redirect('/');
      alert("user not found");
    } 
    
    else {
      req.session.user = user.dataValues;
      res.redirect('/blog');
      sendJSONresponse(res, 400, 'Welcome');
    }
  });

  if (err) {
    alert(err);
    sendJSONresponse(res, 400, err);
  } 
};





const userSchema = Joi.object().keys( 
  {
  Name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
  }
)




/* Hash password */
module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } 
  
  catch(error) {
    throw new Error('Hashing failed', error)
  }
}






// router.post('/signup', (req,res) => {
//   const 
//   {
//     Name,
//     email,
//     password
//   } = req.body;

//   const newUser = new Users({})

//   newUser.save(
//     {
//       Name,
//       email,
//       password
//     },(err,result) => {

//     if(err) {
//       console.log(err);
//       sendJSONresponse(res, 400, err);
//     }

//     else {
//       res.end(result)
//     }
//   })
// })




































// var buildLocationList = function(req, res, results, stats) {

//   var locations = [];

//   results.forEach(function(doc) {

//     locations.push({
//       distance: theEarth.getDistanceFromRads(doc.dis),
//       name: doc.obj.name,
//       address: doc.obj.address,
//       rating: doc.obj.rating,
//       facilities: doc.obj.facilities,
//       _id: doc.obj._id
//     });
//   });

//   return locations;
// };






  // if (req.params && req.params.locationid) {

  //   Loc
  //     .findById(req.params.locationid)
  //     .exec(function(err, location) {

  //       if (!location) {

  //         sendJSONresponse(res, 404, {
  //           "message": "locationid not found"
  //         });
  //         return;
  //       } 

  //       else if (err) {

  //         console.log(err);
  //         sendJSONresponse(res, 404, err);
  //         return;
  //       }

  //       console.log(location);
  //       sendJSONresponse(res, 200, location);
  //     });

  // } 

  // else {

  //   console.log('No locationid specified');
  //   sendJSONresponse(res, 404, {
  //     "message": "No locationid in request"
  //   });
  // }
// };

/* POST a new location */
/* /api/locations */
// module.exports.locationsCreate = function(req, res) {

//   console.log(req.body);

//   Loc.create({

//     name: req.body.name,
//     address: req.body.address,
//     facilities: req.body.facilities.split(","),
//     coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
//     openingTimes: [{
//       days: req.body.days1,
//       opening: req.body.opening1,
//       closing: req.body.closing1,
//       closed: req.body.closed1,
//     }, 
//     {
//       days: req.body.days2,
//       opening: req.body.opening2,
//       closing: req.body.closing2,
//       closed: req.body.closed2,
//     }]
//   }, function(err, location) {

//     if (err) {

//       console.log(err);
//       sendJSONresponse(res, 400, err);
//     } 

//     else {

//       console.log(location);
//       sendJSONresponse(res, 201, location);
//     }
//   });
// };

/* PUT /api/locations/:locationid */
// module.exports.locationsUpdateOne = function(req, res) {

//   if (!req.params.locationid) {

//     sendJSONresponse(res, 404, {
//       "message": "Not found, locationid is required"
//     });

//     return;
//   }
//   Loc.findById(req.params.locationid).select('-reviews -rating').exec(
    
//       function(err, location) {

//         if (!location) {

//           sendJSONresponse(res, 404, {
//             "message": "locationid not found"
//           });

//           return;

//         } 

//         else if (err) {

//           sendJSONresponse(res, 400, err);
//           return;
//         }

//         location.name = req.body.name;
//         location.address = req.body.address;
//         location.facilities = req.body.facilities.split(",");
//         location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];

//         location.openingTimes = [{

//           days: req.body.days1,
//           opening: req.body.opening1,
//           closing: req.body.closing1,
//           closed: req.body.closed1,
//         }, 
//         {
//           days: req.body.days2,
//           opening: req.body.opening2,
//           closing: req.body.closing2,
//           closed: req.body.closed2,
//         }];

//         location.save(function(err, location) {

//           if (err) {
//             sendJSONresponse(res, 404, err);
//           } 

//           else {

//             sendJSONresponse(res, 200, location);
//           }
//         });
//       }
//   );
// };

/* DELETE /api/locations/:locationid */
// module.exports.locationsDeleteOne = function(req, res) {

// var Delete_Location = req.params.locationid;

//   if (locationid) {

//     Loc.findByIdAndRemove(Delete_Location).exec(

//       function(err, Delete_Location) {

//         if (err) {

//           console.log(err);
//           sendJSONresponse(res, 404, err);
//           return;
//         }

//         console.log("Location id " + Delete_Location + " deleted");
//         sendJSONresponse(res, 204, null);

//       }
//     );
//   } 

//   else {

//     sendJSONresponse(res, 404, {"message": "No locationid"});
//   }
  
// };
