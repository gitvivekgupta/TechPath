

























































/* GET 'home' page */
// module.exports.homelist = function(req, res) {

//     res.render('locations-list', {

//         title: 'Cowork - find a place to work with wifi',
//         pageHeader: {
//             title: 'Cowork',
//             strapline: 'Find places to work with wifi near you!'
//         },
//         sidebar: "Looking for wifi and a seat? Cowork helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Cowork help you find the place you're looking for.",
        
//         locations: [{
//             name: 'Viveks Cafe',
//             address: '1',
//             rating: 3,
//             facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//             distance: '1m'
//         }, {
//             name: 'C',
//             address: '12',
//             rating: 4,
//             facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//             distance: '2m'
//         }, {
//             name: 'Bur',
//             address: '124',
//             rating: 2,
//             facilities: ['Food', 'Premium wifi'],
//             distance: '2m'
//         }]
//     });
// };

/* GET 'Location info' page */
// module.exports.locationInfo = function(req, res) {

//     res.render('location-info', {

//         title: 'Viveks Cafe',
//         pageHeader: {
//             title: 'Viveks Cafe'
//         },
//         sidebar: {
//             context: 'is on Cowork because it has accessible wifi and space to sit down with your laptop and get some work done.',
//             callToAction: 'If you have been and you like it - or if you dont - please leave a review to help other people just like you.'
//         },
//         location: {
//             name: 'Viveks Cafe',
//             address: '1',
//             rating: 3,
//             facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//             coords: {
//                 lat: 51.455041,
//                 lng: -0.9690884
//             },
//             openingTimes: [{
//                 days: 'Monday - Friday',
//                 opening: '7:00am',
//                 closing: '7:00pm',
//                 closed: false
//             }, {
//                 days: 'Saturday',
//                 opening: '8:00am',
//                 closing: '5:00pm',
//                 closed: false
//             }, {
//                 days: 'Sunday',
//                 closed: true
//             }],
//             reviews: [{
//                 author: 'vivek',
//                 rating: 5,
//                 timestamp: '16 July 2018',
//                 reviewText: 'What a great place. I cant say enough good things about it.'
//             }, {
//                 author: 'gupta',
//                 rating: 3,
//                 timestamp: '16 June 2018',
//                 reviewText: 'It was okay. Coffee wasnt great, but the wifi was fast.'
//             }]
//         }
//     });
// };

/* GET 'Add review' page */
// module.exports.addReview = function(req, res) {
//     res.render('location-review-form', {
//         title: 'Review Viveks Cafe on Cowork',
//         pageHeader: {
//             title: 'Review Viveks Cafe'
//         }
//     });
// };