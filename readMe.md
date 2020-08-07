Half Baked Application Development Log

6th August 2020

1 - Brainstorming for ideas
2 - Chosen recipe finding application
3 - Created MVPs, github, repo and trello board
4 - Created wireframes
5 - Searched for suitable APIs
6 - Spoonacular API chosen, applied for API key.
7 - Idea for diet plan, calorie counting
8 - Study API links

7th August 2020

1 - Team coding serve side
2 - Created a User and Recipe models, repositories and controllers in IntelliJ
3 - In Recipe model, we needed to decide to import wholesale or build our own
4 - Recipe will hold a name and unique ID so an API call can be made, saving the need to write a lot of code.
5 - Fetch using the recipeID;
6 - Create DataLoader for testing purposes
7 - Tested via localhost:8080, initially user not displaying it's recipe. Thankfully not an issue.
8 - Back end parked, moved to front end.
9 - Creating MainContainer, RecipeContainer, ListContainer and SearchContainer  and components folders (list, recipe and search).
10 - To avoid DRY and additionally gitIgnore the API key we created helper files for the API URL and BackEndURL
11 - Now able to render placeholder containers to LocalHost:3000
12 - Begin work on generating a random recipe from the API to RecipeContainer
13 -  Created ListOfRecipies components
14 - Had issue loading image because it tried to render before the fetch request completed. Added conditional logic to delay the render. Image now renders.
15 - Created RecipeInstructions component and now renders within RecipeContainer
