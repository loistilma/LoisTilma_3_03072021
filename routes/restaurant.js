var express = require('express');
var router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./data/datatest.json');
let restaurants = JSON.parse(rawdata);

/* GET restaurant page. */
router.get('/', function(req, res, next) {
    for (i in restaurants) {
        var restaurant = {};
        restaurantUrl = '/' + restaurants[i].url.split('.')[0];
        //console.log(restaurantUrl);
        if (restaurantUrl === req.originalUrl) {
            restaurant = restaurants[i];
        }
    }
    //console.log(req.originalUrl);
    //console.log(restaurant)
    res.render('restaurant', { title: 'ohmyfood', pageTitle: restaurant.title, restaurant: restaurant });
});

module.exports = router;