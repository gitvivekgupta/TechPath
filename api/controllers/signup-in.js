var express=require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
const PORT = 3000;
var bodyParser = require('body-parser')
var mongoose = require("mongoose")
var path = require('path')
var cors = require('cors');
require('./api/models/db');

const  url = 'mongodb://h:123456v@ds145574.mlab.com:45574/hackthon2';

mongoose.connect(url, { useNewUrlParser: true });
// mongoose.connect(url);

// mongoose.connection.once('open', function () {
//  console.log("Database connection opened");
// });
// mongoose.connection.on('error', function (error) {
//  console.log("Database connection error %s", error);
// });
// mongoose.connection.on('reconnected', function() {
//  console.log("Database reconnected");
// });
// mongoose.connection.on('disconnected', function() {
//  console.log("Database disconnected");
//  mongoose.connect(url);
// });

const UserSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true,
},
    lastName: {
      type:String,
      required:true,
    },
      email: {
        type:String,
        required:true,
    },
        work: {
          type:String,
          required:true,
        },
          desination: {
            type:String,
            required:true,
        },
              password: {
                type:String,
                required:true,
            }
})

var Users = mongoose.model("Users" , UserSchema);

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))


// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_email',
    secret: 'password',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {

  if (req.cookies.user_email && !req.session.user) {
      res.clearCookie('user_email');        
  }
  next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_email) {
      res.redirect('/dashboard');
  } 
  
  else {
      next();
  }    
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});


app.get('/dashboard', sessionChecker, (req, res) => {
  res.sendFile(__dirname + '/public/home_page.html');
});

app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + '/public/login.html');
    })
    .post((req, res) => {
        var email = req.body.email,
            password = req.body.pwd;

            Users.find({ email: email,password:password }).then(function (user) {
            if (!user) {
                res.redirect('/login');
           } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    });
    app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + '/public/sign_up.html');
    })
    .post((req, res) => {
      Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        work: req.body.work,
        desination: req.body.desination,
        password: req.body.password,
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/dashboard');
        })
        .catch(error => {
           console.log(error)
        });
    });


app.post('/list',(req,res)=>{
   const {firstName,lastName,email,work,desination,aboutYou,password,confirmPassword} = req.body;
   const newUser = new Users({}
   )
   newUser.save({firstName,lastName,email,work,desination,aboutYou,password,confirmPassword},(err,result)=>{
     if(err){
       res.end('Bhai error ha i',err)
     }
     else {res.end(result)
     }
   })   






res.end("Will save you list item")
})
  app.listen(PORT,()=>{
    console.log(`Magic happens on PORT ${PORT}`);
   })