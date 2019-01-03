
/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Cowork',
        content: 'Cowork was created to help people find places to sit down and get a bit of work done.'
    });
};