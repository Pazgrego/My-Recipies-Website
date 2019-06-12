// Set environment variable of port
const port = process.env.PORT || 8080;
console.log('Server is starting....');

const bodyParser = require('body-parser');
let express = require('express');
let app = express();
let router = express.Router();

let mongo = require('mongodb');
let assert = require('assert');

let url =  'mongodb://localhost:27017/PazRecipies';

const listening = () => {
    console.log(`Listening to port ${port}....`)
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Run the project with Node JS - Html&Css&JS
app.use(express.static('lib'));

// get all recipes
/*
app.get('/api/Recipes', (req, res) => {
   /!* let allRecipes = fs.readFileSync('recipies.json');*!/
    res.send(JSON.stringify({paz: "paz"}));
});
*/
const pazRecipiesDb = "PazRecipies";
const recipesCollection = "recipes";

app.post('/insert', (req, res) => {
    mongo.connect(url, function(err, db){
        /*assert.equal(null, err);*/
        if (err) throw err;

        const dbo = db.db(pazRecipiesDb);

        dbo.collection("recipes").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    res.status(200);
});

app.get('/allRecipies', (req, res) => {
    mongo.connect(url, (err, db) => {
       if(err) throw err;

        const dbo = db.db(pazRecipiesDb);

       dbo.collection(recipesCollection).find().toArray((err, data) => {
          /* console.log(data);*/
           res.send(data);

       });
    })
});

//get specific recipe
app.get('/api/Recipes/:id', (req, res) => {
    res.send(data);
});

app.put('/api/Recipes', (req, res) => {
    console.log("paz");
    // TODO: Add recipe to json file
    console.log(req.body);
    fs.appendFileSync('recipies.json', JSON.stringify(req.body), function (err) {
        console.log(err);
    });
    res.json("Sdfv");
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
   })
});
