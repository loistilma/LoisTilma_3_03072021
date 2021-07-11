const fs = require('fs');

let rawdata = fs.readFileSync('./data/restaurants.json');
let restaurants = JSON.parse(rawdata);

for (i in restaurants) {
    restaurantUrl = restaurants[i].url.split('.')[0]
    //console.log(restaurantUrl);
}