
var Fav = (e) => {
    e = e || window.event;
    console.log(e.target);
 if(e.target.getAttribute("src") == ".\\image\\emptyHeart.icon") {
        e.target.src = ".\\image\\fillHeart.icon";
    }
    else {
        e.target.src = ".\\image\\emptyHeart.icon";

    }
}

function limitText(someText, maxLength) {

    if (someText.length > maxLength) {
        someText = someText.substr(0,maxLength) + '...';
    }
    return someText;
}


class recipies {
    constructor(title, image, instructions, source, signFav){
        this._title = title;
        this._image = image;
        this._instructions  = instructions;
        this._source = source;
        this._signFav = signFav;
    }
    get title (){
        return this._title;
    }
    get image() {
        return this._image;
    }
    get instructions () {
        return this._instructions;
    }
    get source () {
        return this._source;
    }
    get signFav () {
        return ".\\image\\emptyHeart.icon";
    }
}

const chocolatechipCookies = new recipies('chocolate chip cookies', ".\\image\\ChocolateChipsCookies.jpg",
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

const containerRecipe =  document.createElement('div');
document.getElementById("allRecipe").appendChild(containerRecipe);
containerRecipe.className = "containerRecipe";

const recipeInfo =  document.createElement('div');
containerRecipe.appendChild(recipeInfo);
recipeInfo.className = "recipeInfo";

const headRecipe =  document.createElement('span');
recipeInfo.appendChild(headRecipe);
headRecipe.className = "headRecipe";

const imageRecipe =  document.createElement('img');
recipeInfo.appendChild(imageRecipe);
imageRecipe.className = "imageRecipe";

const paragraphRecipe =  document.createElement('p');
recipeInfo.appendChild(paragraphRecipe);
paragraphRecipe.className = "paragraphRecipe";

const linkRecipe =  document.createElement('a');
recipeInfo.appendChild(linkRecipe);
linkRecipe.className = "linkRecipe";

const spanLink =  document.createElement('span');
linkRecipe.appendChild(spanLink);
spanLink.className = "spanLink";

const favImage = document.createElement('img');
recipeInfo.appendChild(favImage);
favImage.className = "clearHeart";


headRecipe.innerHTML = chocolatechipCookies.title;
imageRecipe.src = chocolatechipCookies.image;
paragraphRecipe.innerHTML = limitText((chocolatechipCookies.instructions), 300);
linkRecipe.href = "";
spanLink.innerHTML = "Full recipe";

// TODO: tooltip are tell is favorite toggle
favImage.src = chocolatechipCookies.signFav;