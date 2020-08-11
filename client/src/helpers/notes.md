Donald API key: 412af1d196fd4a28af649ebd01a51d74
Joe API key: 5af7f33cbe434a64b6e95daa599e2837
Donald API key2: 94c5356f0eb24c80821176ea3ea11789
Donald API key 3: 919df1b260584275af3f87fd3ef98fd5

Search Recipes:
https://spoonacular.com/food-api/docs#Search-Recipes-Complex

https://api.spoonacular.com/recipes/complexSearch

https://api.spoonacular.com/recipes/complexSearch?query=egg,bacon&intolerances=Soy&apiKey=919df1b260584275af3f87fd3ef98fd5

https://api.spoonacular.com/recipes/complexSearch?query=egg,bacon&intolerances=Soy?apiKey=919df1b260584275af3f87fd3ef98fd5

query (string, like "pasta")
cuisine (string, like "Italian")


diet: ["Gluten Free", "Ketogenic", "Vegetarian", "Lactovegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"]

intolerences: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"]


ignorePantry=true Whether to ignore typical pantry items, such as water, salt, flour, etc.


Get Similar Recipies
https://spoonacular.com/food-api/docs#Get-Similar-Recipes

https://api.spoonacular.com/recipes/715538/similar //append "/similar" to recipe id


Return ingredients of a recipe by recipe ID
https://api.spoonacular.com/recipes/{id}/ingredientWidget.json

Get Random Recipes (1 to 100)
https://spoonacular.com/food-api/docs#Get-Random-Recipes

https://api.spoonacular.com/recipes/random // can add tags (diets, meal types, cuisines, or intolerances.)






.......
Maybe not needed
Convert ingredient units
https://spoonacular.com/food-api/docs#Convert-Amounts

https://api.spoonacular.com/recipes/convert?ingredientName=flour&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams
