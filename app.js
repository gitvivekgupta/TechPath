var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engines = require('consolidate');
var cors = require('cors');

require('./api/models/db');

var routes = require('./server/routes/index');
var routesApi = require('./api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/server', '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));

app.use('/', routes);
app.use('/api', routesApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use(function(err, req, res, next) {

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;