let key = "?apiKey=412af1d196fd4a28af649ebd01a51d74";

function recipeSearchByIngredientsURL(args){
  return "https://api.spoonacular.com/recipes/findByIngredients" + args + this.apiKey;
}
