let key = "?apiKey=4e032f0a00ae4ac4a43167135bdca9b4";
//new key from Donald

function recipeSearchByIngredientsURL(args){
  return "https://api.spoonacular.com/recipes/findByIngredients" + args + this.apiKey;
}

function showTestRecipe(args){
    return "https://api.spoonacular.com/recipes/1100000/information" + this.apiKey;
}
