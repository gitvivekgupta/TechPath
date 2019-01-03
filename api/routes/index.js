var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require("mongoose")
var path = require('path')
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var ctrlevents = require('../controllers/eventhandlers');
var login = require('../../server/routes');

// var ctrlReviews = require('../controllers/reviews');
router.post('/login', ctrlevents.userlogin);
router.post('/signup', ctrlevents.usersignup);



module.exports = router;






































// router.get('/locations', ctrlLocations.locationsListByDistance);
// router.post('/locations', ctrlLocations.locationsCreate);
// router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
// router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
// router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);