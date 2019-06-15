"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getRecipies = function getRecipies() {
  fetch('/allRecipies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;
        createRecipeContainer(x);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }).catch(function (error) {
    return console.log(error);
  });
};

var Fav = function Fav(event) {
  event = event || window.event;

  if (event.target.getAttribute("src") === ".\\image\\emptyHeart.icon") {
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
  }], [{
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

var chocolatechipCookies = new recipies('chocolate chip cookies', ".\\image\\ChocolateChipsCookies.jpg", "1 cup butter, softened1 cup white sugar1 cup packed brown sugar2 eggs2 teaspoons vanilla extract1 teaspoon baking soda2 teaspoons hot water1/2 teaspoon salt3 cups all-purpose flour2 cups semisweet chocolate chips1 cup chopped walnuts", 'Preheat oven to 350ºF. Line baking sheets with parchment paper.\n' + '\n' + 'In a medium bowl combine the flour, baking soda, and salt.\n' + '\n' + 'In the bowl of an electric mixer beat the butter, granulated sugar, and brown sugar until creamy, about 2 minutes. Add the vanilla and eggs. Gradually beat in the flour mixture. Stir in the chocolate chips.\n' + '\n' + 'If time permits, wrap dough in plastic wrap and refrigerate for at least 24 hours but no more than 72 hours. This allows the dough to “marinate” and makes the cookies thicker, chewier, and more flavorful. Let dough sit at room temperature just until it is soft enough to scoop.\n' + '\n' + 'Divide the dough into 3-tablespoon sized balls using a large cookie scoop and drop onto prepared baking sheets.\n' + '\n' + 'Bake for 12-15 minutes, or until golden brown. Cool for 5 minutes before removing to wire racks to cool completely.\n' + '\n' + 'Although I prefer cookies fresh from the oven, these can be stored in an airtight container for up to 5 days. See post for storage tips.', 'https://www.handletheheat.com/bakery-style-chocolate-chip-cookies/');

function saveRecipe() {
  var newTitleRecipe = document.getElementById("titleRecipe").value;
  var newIngredientsRecipe = document.getElementById("ingredientsRecipe").value;
  var newInstructionsRecipe = document.getElementById("instructionsRecipe").value;
  var newSourceRecipe = document.getElementById("sourceRecipe").value;
  var newImageRecipe = document.getElementById("imageRecipe").value;
  var newRecipe = new recipies(newTitleRecipe, newImageRecipe, newIngredientsRecipe, newInstructionsRecipe, newSourceRecipe);
  console.log(newRecipe);
  createRecipeContainer(newRecipe);
  fetch('/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
  }).then(function (res) {
    res.status(200).send("success");
  }).catch(function (error) {
    return console.log("error");
  });
  /* fetch('/api/Recipes', {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(newRecipe)
   })
   .then(function (response) {
       return response.json();
   })
   .then(function (myJson) {
   console.log(myJson);
   });*/
}

function createRecipeContainer(recipe) {
  var containerRecipe = document.createElement('div');
  document.getElementById("allRecipe").appendChild(containerRecipe);
  containerRecipe.className = "containerRecipe";
  var recipeInfo = document.createElement('div');
  containerRecipe.appendChild(recipeInfo);
  recipeInfo.className = "recipeInfo";
  var title = document.createElement('span');
  recipeInfo.appendChild(title);
  title.className = "title";
  title.innerHTML = recipe._title;
  var imageRecipe = document.createElement('img');
  recipeInfo.appendChild(imageRecipe);
  imageRecipe.className = "imageRecipe";
  imageRecipe.src = recipe._image;
  var paragraphRecipe = document.createElement('p');
  recipeInfo.appendChild(paragraphRecipe);
  paragraphRecipe.className = "paragraphRecipe";
  paragraphRecipe.innerHTML = recipe._instructions; //function limitText Doesnt work as well

  /*paragraphRecipe.innerHTML = limitText((recipe.instructions), 300);*/

  var linkRecipe = document.createElement('a');
  recipeInfo.appendChild(linkRecipe);
  linkRecipe.className = "linkRecipe";
  linkRecipe.href = "";
  var spanLink = document.createElement('span');
  linkRecipe.appendChild(spanLink);
  spanLink.className = "spanLink";
  spanLink.innerHTML = "Full recipe";
  var favImage = document.createElement('img');
  recipeInfo.appendChild(favImage);
  favImage.className = "clearHeart";
  favImage.src = recipies.emptySignFav;
  favImage.title = "Mark as favorite"; // TODO: add Fav function to this image

  favImage.onclick = Fav;
} //TODO: add more recipe with the new method