const getRecipies = () => {
    fetch('/allRecipies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            for(let x of data){
                console.log(x);
            }
        }).
    catch(error => console.log(error));
};

let Fav = (event) => {
    event = event|| window.event;

 if(event.target.getAttribute("src") === ".\\image\\emptyHeart.icon") {
     event.target.src = ".\\image\\fillHeart.icon";
    }
    else {
     event.target.src = ".\\image\\emptyHeart.icon";
    }
};

const openModal = () => {
 let modal = document.getElementById('popup1');
 modal.style.visibility = "visible";
};

const closeModal = () => {
 let modal = document.getElementById('popup1');
 modal.style.visibility = "hidden";
};

function limitText(someText, maxLength) {
    if (someText.length > maxLength) {
        someText = someText.substr(0,maxLength) + '...';
    }
    return someText;
}


class recipies {
    constructor(title, image, ingredients, instructions, source, emptySignFav, fullSignFav){
        this._title = title;
        this._image = image;
        this._ingredients = ingredients;
        this._instructions  = instructions;
        this._source = source;
        this._emptySignFav= emptySignFav;
    }
    get title (){
        return this._title;
    }
    get image() {
        return this._image;
    }
    get ingredients() {
        return this._ingredients;
    }
    get instructions () {
        return this._instructions;
    }
    get source () {
        return this._source;
    }
    get emptySignFav () {
        return ".\\image\\emptyHeart.icon";
    }
    get fullSingFav (){
        return ".\\image\\fillHeart.icon";
    }
}

const chocolatechipCookies = new recipies('chocolate chip cookies', ".\\image\\ChocolateChipsCookies.jpg", "1 cup butter, softened1 cup white sugar1 cup packed brown sugar2 eggs2 teaspoons vanilla extract1 teaspoon baking soda2 teaspoons hot water1/2 teaspoon salt3 cups all-purpose flour2 cups semisweet chocolate chips1 cup chopped walnuts",
    'Preheat oven to 350ºF. Line baking sheets with parchment paper.\n' +
    '\n' +
    'In a medium bowl combine the flour, baking soda, and salt.\n' +
    '\n' +
    'In the bowl of an electric mixer beat the butter, granulated sugar, and brown sugar until creamy, about 2 minutes. Add the vanilla and eggs. Gradually beat in the flour mixture. Stir in the chocolate chips.\n' +
    '\n' +
    'If time permits, wrap dough in plastic wrap and refrigerate for at least 24 hours but no more than 72 hours. This allows the dough to “marinate” and makes the cookies thicker, chewier, and more flavorful. Let dough sit at room temperature just until it is soft enough to scoop.\n' +
    '\n' +
    'Divide the dough into 3-tablespoon sized balls using a large cookie scoop and drop onto prepared baking sheets.\n' +
    '\n' +
    'Bake for 12-15 minutes, or until golden brown. Cool for 5 minutes before removing to wire racks to cool completely.\n' +
    '\n' +
    'Although I prefer cookies fresh from the oven, these can be stored in an airtight container for up to 5 days. See post for storage tips.',
    'https://www.handletheheat.com/bakery-style-chocolate-chip-cookies/');


function saveRecipe() {
    let newTitleRecipe = document.getElementById("titleRecipe").value;
    let newIngredientsRecipe = document.getElementById("ingredientsRecipe").value;
    let newInstructionsRecipe = document.getElementById("instructionsRecipe").value;
    let newSourceRecipe = document.getElementById("sourceRecipe").value;
    let newImageRecipe = document.getElementById("imageRecipe").value;
    const newRecipe = new recipies(newTitleRecipe, newImageRecipe, newIngredientsRecipe, newInstructionsRecipe, newSourceRecipe);

    console.log(newRecipe);
    createRecipeContainer(newRecipe);
    fetch('/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
    }).then(function (res) {
        res.status(200).send("success")
    }).catch(error =>  console.log("error"));


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

function createRecipeContainer (recipe) {
    const containerRecipe =  document.createElement('div');
    document.getElementById("allRecipe").appendChild(containerRecipe);
    containerRecipe.className = "containerRecipe";

    const recipeInfo =  document.createElement('div');
    containerRecipe.appendChild(recipeInfo);
    recipeInfo.className = "recipeInfo";

    const title =  document.createElement('span');
    recipeInfo.appendChild(title);
    title.className = "title";
    title.innerHTML = recipe.title;

    const imageRecipe =  document.createElement('img');
    recipeInfo.appendChild(imageRecipe);
    imageRecipe.className = "imageRecipe";
    imageRecipe.src = recipe.image;

    const paragraphRecipe =  document.createElement('p');
    recipeInfo.appendChild(paragraphRecipe);
    paragraphRecipe.className = "paragraphRecipe";
    paragraphRecipe.innerHTML = limitText((recipe.instructions), 300);

    const linkRecipe =  document.createElement('a');
    recipeInfo.appendChild(linkRecipe);
    linkRecipe.className = "linkRecipe";
    linkRecipe.href = "";


    const spanLink =  document.createElement('span');
    linkRecipe.appendChild(spanLink);
    spanLink.className = "spanLink";
    spanLink.innerHTML = "Full recipe";


    const favImage = document.createElement('img');
    recipeInfo.appendChild(favImage);
    favImage.className = "clearHeart";
    favImage.src = recipe.emptySignFav;
    favImage.title = "Mark as favorite";
// TODO: add Fav function to this image
    favImage.onclick = Fav;
}

//TODO: add more recipe with the new method
