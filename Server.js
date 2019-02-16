
//import saveRecipe from "./HomePageJS.js";
//var page = require('./HomePageJS');
//var http = require('http');
//var fs = require('fs');


/*http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    const stream = fs.createReadStream( './index.html');
    stream.read(0);
    //response.write('paaazzz');
    response.end();
}).listen(8080);*/


// Set environment variable of port
const port = process.env.PORT || 8080;
console.log('Server is starting....');

var express = require('express');
var app = express();

const Recipes = [
    {id: 1, name: 'TheFirst'},
    {id: 2, name: 'TheSecond'},
];

const listening = () => {
    console.log(`Listening to port ${port}....`)
};


// Run the project just with Node JS - Html&Css&JS
app.use(express.static('lib'));

// get all recipes
app.get('/api/Recipes', (req, res) => {
    res.send([1, 2, 3]);
});

//get specific recipe
app.get('api/Recipes/:id', (req, res) => {
    res.send(req.params.id);
});

var server = app.listen(port, listening);




const fs = require('fs');

//Instead this object - push the recipes object
let RecipeJSON= {
    id: 1,
    name: 'Brownies Cookies',
    Difficulty: 3
};

let data = JSON.stringify(RecipeJSON);
fs.writeFileSync('recipies.json', data);


/*http.createServer (function (req,res){
    fs.readFile('recipies.json', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);*/

/*//Use express
const express = require('express');
const app = express();

app.get('/paz', (req, res) => {
    res.send('Pazzzzz');
}).listen(8080, () => {console.log('listening to port 8080....')});*/


/*fs.appendFile('recipies.json', 'Add Context', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('recipies.json', 'Recplaced?', function(err){
    if (err) throw err;
    console.log('Saved!');
});*/

   // fs = require('fs');
/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        th row err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});*/

