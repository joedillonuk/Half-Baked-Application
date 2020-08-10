let key = "?apiKey=5af7f33cbe434a64b6e95daa599e2837";
//new key from Joe

function recipeSearchByIngredientsURL(args){
  return "https://api.spoonacular.com/recipes/findByIngredients" + args + this.apiKey;
}

function showTestRecipe(args){
    return "https://api.spoonacular.com/recipes/1100000/information" + this.apiKey;
}
