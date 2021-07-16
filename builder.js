const fs = require('fs');
const pug = require('pug');

// Compile template.pug, and render a set of data
var indexFile;
var tempIndex = pug.renderFile('./views/index.pug', { pretty: true, title: 'ohmyfood', pageTitle: 'ohmyfood' });
indexFile = tempIndex.replace('href="/"', 'href="/loistilma_3_03072021"')
.replace('href="la-palette-du-gout"', 'href="la-palette-du-gout.html"')
.replace('href="la-note-enchantee"', 'href="la-note-enchantee.html"')
.replace('href="a-la-francaise"', 'href="a-la-francaise.html"')
.replace('href="le-delice-des-sens"', 'href="le-delice-des-sens.html"');
//console.log(indexFile)
fs.writeFileSync('index.html', indexFile);
let rawdata = fs.readFileSync('./data/restaurants.json');
let restaurants = JSON.parse(rawdata);
//console.log(restaurants[1]);

for (i in restaurants) {
  var tempRestaurant = pug.renderFile('./views/restaurant.pug', { pretty: true, title: 'ohmyfood', pageTitle: restaurants[i].title, restaurant: restaurants[i] });
  restaurantFile = tempRestaurant.replace('href="/"', 'href="/loistilma_3_03072021"')
  fs.writeFileSync(restaurants[i].url, restaurantFile);
}