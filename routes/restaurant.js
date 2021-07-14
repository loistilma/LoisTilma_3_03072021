var express = require('express');
var router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./data/restaurants.json');
let restaurants = JSON.parse(rawdata);

/* GET restaurant page. */
router.get('/', function(req, res, next) {
    var restaurant;
    for (i in restaurants) {
        restaurantUrl = '/' + restaurants[i].url.split('.')[0];
        //console.log(restaurantUrl);
        //console.log(req.originalUrl);
        if (restaurantUrl === req.originalUrl) {
            //console.log('ok')
            restaurant = restaurants[i];
        }
        //console.log(restaurant)
    }
    
    //console.log(req.originalUrl);
    //console.log(restaurant);
    res.render('restaurant', { title: 'ohmyfood', pageTitle: restaurant.title, restaurant: restaurant });
});

module.exports = router;