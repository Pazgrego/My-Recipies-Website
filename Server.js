// Set environment variable of port
const port = process.env.PORT || 8080;
console.log('Server is starting....');

let express = require('express');
let app = express();

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
   /* let allRecipes = fs.readFileSync('recipies.json');*/
    res.send(data);
});

//get specific recipe
app.get('/api/Recipes/:id', (req, res) => {
    res.send(data);
});

let server = app.listen(port, listening);

const fs = require('fs');

//Instead this object - push the recipes object
let RecipeJSON= {
    id: 1,
    name: 'Brownies Cookies',
    Difficulty: 3
};
/*
let data = JSON.stringify(RecipeJSON);
fs.writeFileSync('recipies.json', data);*/


let io = require('socket.io')(server);
io.on('connection', function(socket){
   socket.on('addRecipe', function(recipe){
       let data = JSON.stringify(recipe);
       fs.writeFileSync('recipies.json', data);
       console.log("roy hakarziya");
   });
});

