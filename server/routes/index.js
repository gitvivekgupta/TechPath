
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/blog', (req, res) => {
    res.render('readblog');
});

router.get('/publish', (req, res) => {
    res.render('publish');
});

router.get('/login', (req, res) => {
    res.render('blog');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;