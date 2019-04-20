"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fav = function Fav(event) {
  event = event || window.event; //console.log(e.target);

  if (event.target.getAttribute("src") == ".\\image\\emptyHeart.icon") {
    event.target.src = ".\\image\\fillHeart.icon";
  } else {
    event.target.src = ".\\image\\emptyHeart.icon";
  }
};

var openModal = function openModal() {
  var modal = document.getElementById('popup1');
  modal.style.visibility = "visible";
};

var closeModal = function closeModal() {
  var modal = document.getElementById('popup1');
  modal.style.visibility = "hidden";
};

function limitText(someText, maxLength) {
  if (someText.length > maxLength) {
    someText = someText.substr(0, maxLength) + '...';
  }

  return someText;
}

var recipies =
/*#__PURE__*/
function () {
  function recipies(title, image, ingredients, instructions, source, emptySignFav, fullSignFav) {
    _classCallCheck(this, recipies);

    this._title = title;
    this._image = image;
    this._ingredients = ingredients;
    this._instructions = instructions;
    this._source = source;
    this._emptySignFav = emptySignFav;
  }

  _createClass(recipies, [{
    key: "title",
    get: function get() {
      return this._title;
    }
  }, {
    key: "image",
    get: function get() {
      return this._image;
    }
  }, {
    key: "ingredients",
    get: function get() {
      return this._ingredients;
    }
  }, {
    key: "instructions",
    get: function get() {
      return this._instructions;
    }
  }, {
    key: "source",
    get: function get() {
      return this._source;
    }
  }, {
    key: "emptySignFav",
    get: function get() {
      return ".\\image\\emptyHeart.icon";
    }
  }, {
    key: "fullSingFav",
    get: function get() {
      return ".\\image\\fillHeart.icon";
    }
  }]);

  return recipies;
}();

var chocolatechipCookies = new recipies('chocolate chip cookies', ".\\image\\ChocolateChipsCookies.jpg", "1 cup butter, softened1 cup white sugar1 cup packed brown sugar2 eggs2 teaspoons vanilla extract1 teaspoon baking soda2 teaspoons hot water1/2 teaspoon salt3 cups all-purpose flour2 cups semisweet chocolate chips1 cup chopped walnuts", 'Preheat oven to 350ºF. Line baking sheets with parchment paper.\n' + '\n' + 'In a medium bowl combine the flour, baking soda, and salt.\n' + '\n' + 'In the bowl of an electric mixer beat the butter, granulated sugar, and brown sugar until creamy, about 2 minutes. Add the vanilla and eggs. Gradually beat in the flour mixture. Stir in the chocolate chips.\n' + '\n' + 'If time permits, wrap dough in plastic wrap and refrigerate for at least 24 hours but no more than 72 hours. This allows the dough to “marinate” and makes the cookies thicker, chewier, and more flavorful. Let dough sit at room temperature just until it is soft enough to scoop.\n' + '\n' + 'Divide the dough into 3-tablespoon sized balls using a large cookie scoop and drop onto prepared baking sheets.\n' + '\n' + 'Bake for 12-15 minutes, or until golden brown. Cool for 5 minutes before removing to wire racks to cool completely.\n' + '\n' + 'Although I prefer cookies fresh from the oven, these can be stored in an airtight container for up to 5 days. See post for storage tips.', 'https://www.handletheheat.com/bakery-style-chocolate-chip-cookies/'); //TODO: export this object
//export {chocolatechipCookies};
//module.exports = chocolatechipCookies;

var lasagna = new recipies('Lasagna', ".\\image\\5167-Lasagne-Autentico.jpg", "1 pound sweet Italian sausage3/4 pound lean ground beef1/2 cup minced onion2 cloves garlic, crushed1 (28 ounce) can crushed tomatoes2 (6 ounce) cans tomato paste2 (6.5 ounce) cans canned tomato sauce1/2 cup water2 tablespoons white sugar1 1/2 teaspoons dried basil leaves1/2 teaspoon fennel seeds1 teaspoon Italian seasoning1 tablespoon salt1/4 teaspoon ground black pepper4 tablespoons chopped fresh parsley12 lasagna noodles16 ounces ricotta cheese1 egg1/2 teaspoon salt3/4 pound mozzarella cheese, sliced3/4 cup grated Parmesan cheese", "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally. Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. Preheat oven to 375 degrees F (190 degrees C). To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese. Bake in preheated oven for 25 minutes.Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.", "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/");

function saveRecipe() {
  var newTitleRecipe = document.getElementById("titleRecipe").value;
  var newIngredientsRecipe = document.getElementById("ingredientsRecipe").value;
  var newInstructionsRecipe = document.getElementById("instructionsRecipe").value;
  var newSourceRecipe = document.getElementById("sourceRecipe").value;
  var newImageRecipe = document.getElementById("imageRecipe").value;
  var newRecipe = new recipies(newTitleRecipe, newImageRecipe, newIngredientsRecipe, newInstructionsRecipe, newSourceRecipe); //Try the function is work

  console.log(newRecipe);
  http.get("localhost:8080/api/recipes", function (res) {
    console.log(res.statusMessage);
  });
  return newRecipe;
} // invoke this function onclick of save button

/*function writeToJSON(newRecipe) {
    let myJSON = JSON.stringify(newRecipe);
    let tryPushJSON = JSON.parse(myJSON);
    console.log(tryPushJSON);
}*/
// TODO: check why this disappear the new recipe container

/*let data = JSON.parse(chocolatechipCookies.toString());
JSON.parse(chocolatechipCookies.image);
JSON.parse(chocolatechipCookies.ingredients);
JSON.parse(chocolatechipCookies.instructions);
JSON.parse(chocolatechipCookies.source);*/
//function createRecipeContainer () {


var containerRecipe = document.createElement('div');
document.getElementById("allRecipe").appendChild(containerRecipe);
containerRecipe.className = "containerRecipe";
var recipeInfo = document.createElement('div');
containerRecipe.appendChild(recipeInfo);
recipeInfo.className = "recipeInfo";
var headRecipe = document.createElement('span');
recipeInfo.appendChild(headRecipe);
headRecipe.className = "headRecipe";
var imageRecipe = document.createElement('img');
recipeInfo.appendChild(imageRecipe);
imageRecipe.className = "imageRecipe";
var paragraphRecipe = document.createElement('p');
recipeInfo.appendChild(paragraphRecipe);
paragraphRecipe.className = "paragraphRecipe";
var linkRecipe = document.createElement('a');
recipeInfo.appendChild(linkRecipe);
linkRecipe.className = "linkRecipe";
var spanLink = document.createElement('span');
linkRecipe.appendChild(spanLink);
spanLink.className = "spanLink";
var favImage = document.createElement('img');
recipeInfo.appendChild(favImage);
favImage.className = "clearHeart"; //}
//this.createRecipeContainer();

headRecipe.innerHTML = chocolatechipCookies.title;
imageRecipe.src = chocolatechipCookies.image;
paragraphRecipe.innerHTML = limitText(chocolatechipCookies.instructions, 300);
linkRecipe.href = "";
spanLink.innerHTML = "Full recipe";
favImage.src = chocolatechipCookies.emptySignFav;
favImage.title = "Mark as favorite"; // TODO: add Fav function to this image

favImage.onclick = Fav; //TODO: add more recipe with the new method