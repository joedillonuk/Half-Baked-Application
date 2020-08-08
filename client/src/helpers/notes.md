API key: 412af1d196fd4a28af649ebd01a51d74


Search Recipes:
https://spoonacular.com/food-api/docs#Search-Recipes-Complex

https://api.spoonacular.com/recipes/complexSearch



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
