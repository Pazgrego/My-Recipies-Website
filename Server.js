
//import saveRecipe from "./HomePageJS.js";
//var page = require('./HomePageJS');
var http = require('http');
var fs = require('fs');

/*http.createServer (function (req,res){
    fs.readFile('recipies.json', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);*/

//Use express
const express = require('express');
const app = express();

app.get('/paz', (req, res) => {
    res.send('Pazzzzz');
}).listen(8080, () => {console.log('listening to port 8080....')});


/*fs.appendFile('recipies.json', 'Add Context', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('recipies.json', 'Recplaced?', function(err){
    if (err) throw err;
    console.log('Saved!');
});*/

   // fs = require('fs');
/*fs.readFile('./HomePage.html', function (err, html) {
    if (err) {
        th row err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});*/

