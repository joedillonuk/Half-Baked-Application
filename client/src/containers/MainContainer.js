import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar.js';

import RecipeContainer from './RecipeContainer.js';
import ListContainer from './ListContainer.js';
import ListOfRecipes from '../components/recipe/ListOfRecipes.js';

class MainContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      currentUser: null,
      view: "recipe",
      recipeList: [
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 6,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 72,
      "spoonacularScore": 51.0,
      "healthScore": 7.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 171.15,
      "extendedIngredients": [
        {
          "id": 6008,
          "aisle": "Canned and Jarred",
          "image": "beef-broth.png",
          "consistency": "liquid",
          "name": "beef broth",
          "original": "2 packets Swanson® Flavor Concentrated Beef Broth",
          "originalString": "2 packets Swanson® Flavor Concentrated Beef Broth",
          "originalName": "Swanson® Flavor Concentrated Beef Broth",
          "amount": 2.0,
          "unit": "packets",
          "meta": [
            "swanson®"
          ],
          "metaInformation": [
            "swanson®"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "packets",
              "unitLong": "packets"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "packets",
              "unitLong": "packets"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "solid",
          "name": "butter",
          "original": "2 tablespoons butter",
          "originalString": "2 tablespoons butter",
          "originalName": "butter",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 23657,
          "aisle": "Meat",
          "image": "flank-steak.jpg",
          "consistency": "solid",
          "name": "flank steak",
          "original": "1 flank steak",
          "originalString": "1 flank steak",
          "originalName": "flank steak",
          "amount": 1.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 2063,
          "aisle": "Produce",
          "image": "rosemary.jpg",
          "consistency": "solid",
          "name": "fresh rosemary leaves",
          "original": "1 tablespoon chopped fresh rosemary leaves",
          "originalString": "1 tablespoon chopped fresh rosemary leaves",
          "originalName": "chopped fresh rosemary leaves",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "fresh",
            "chopped"
          ],
          "metaInformation": [
            "fresh",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "4 cloves garlic, minced",
          "originalString": "4 cloves garlic, minced",
          "originalName": "garlic, minced",
          "amount": 4.0,
          "unit": "cloves",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 11260,
          "aisle": "Produce",
          "image": "mushrooms.png",
          "consistency": "solid",
          "name": "mushrooms",
          "original": "8 ounces mushrooms, sliced (about 3 cups)",
          "originalString": "8 ounces mushrooms, sliced (about 3 cups)",
          "originalName": "ounces mushrooms, sliced (about",
          "amount": 3.0,
          "unit": "cups",
          "meta": [
            "sliced"
          ],
          "metaInformation": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 709.764,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "2 tablespoons olive oil",
          "originalString": "2 tablespoons olive oil",
          "originalName": "olive oil",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11677,
          "aisle": "Produce",
          "image": "shallots.jpg",
          "consistency": "solid",
          "name": "shallot",
          "original": "1 shallot, diced",
          "originalString": "1 shallot, diced",
          "originalName": "shallot, diced",
          "amount": 1.0,
          "unit": "",
          "meta": [
            "diced"
          ],
          "metaInformation": [
            "diced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "1/4 cup water",
          "originalString": "1/4 cup water",
          "originalName": "water",
          "amount": 0.25,
          "unit": "cup",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 631750,
      "title": "Flank Steak with Mushroom Sauce",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/F4D23G25/flank-steak-with-mushroom-sauce",
      "image": "https://spoonacular.com/recipeImages/631750-556x370.jpg",
      "imageType": "jpg",
      "summary": "Flank Steak with Mushroom Sauce is a <b>gluten free, primal, and ketogenic</b> main course. For <b>$1.71 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>215 calories</b>, <b>15g of protein</b>, and <b>16g of fat</b> each. A few people made this recipe, and 72 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is perfect for <b>valentin day</b>. A mixture of flavor concentrated beef broth, garlic, shallot, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the butter you could follow this main course with the <a href=\"https://spoonacular.com/recipes/cinnamon-butter-cake-60334\">Cinnamon Butter Cake</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 55%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/flank-steak-with-creamy-mushroom-sauce-81607\">Flank Steak with Creamy Mushroom Sauce</a>, <a href=\"https://spoonacular.com/recipes/flank-steak-in-mushroom-wine-sauce-143466\">Flank Steak in Mushroom Wine Sauce</a>, and <a href=\"https://spoonacular.com/recipes/flank-steak-with-shiitake-mushroom-sauce-81692\">Flank Steak with Shiitake Mushroom Sauce</a> for similar recipes.",
      "cuisines": [

      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free",
        "primal"
      ],
      "occasions": [
        "valentine's day",
        "father's day"
      ],
      "winePairing": {
        "pairedWines": [
          "merlot",
          "cabernet sauvignon",
          "pinot noir"
        ],
        "pairingText": "Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. You could try Pepper Bridge Winery Merlot. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 28 dollars per bottle.",
        "productMatches": [
          {
            "id": 444612,
            "title": "Pepper Bridge Winery Merlot",
            "description": "Our 2011 Merlot is rich, round, and intricately layered. An earthy bouquet of cherry and wild berries dance on the nose of this wine, backed by a floral summer breeze. Hints of violets, roasted coffee, spices and mineral weave through the palate. This wine is elegant with a firmly sculpted framework of acid and polished tannins which evoke a long and harmonious finish.",
            "price": "$27.99",
            "imageUrl": "https://spoonacular.com/productImages/444612-312x231.jpg",
            "averageRating": 0.8800000000000001,
            "ratingCount": 5.0,
            "score": 0.8175000000000001,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fpepper-bridge-winery-merlot-2011%2F147082"
          }
        ]
      },
      "instructions": "<ol><li>Heat 1 tablespoon oil in a 10-inch skillet over medium heat.  Add the beef and cook until well browned on both sides and until desired doneness, about 10 minutes for medium-rare.  Remove the beef from the skillet.</li><li>Heat 1 tablespoon butter and the remaining oil in the skillet.  Add the mushrooms and cook for 5 minutes or until tender, stirring occasionally.  Add the shallot, garlic and rosemary and cook and stir for 30 seconds.   Stir in the concentrated broth, water and remaining butter and cook until the butter is melted.</li><li>Cut the beef diagonally against the grain into thin slices.  Serve the mushroom mixture with the beef.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Heat 1 tablespoon oil in a 10-inch skillet over medium heat.",
              "ingredients": [
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add the beef and cook until well browned on both sides and until desired doneness, about 10 minutes for medium-rare.",
              "ingredients": [
                {
                  "id": 23572,
                  "name": "beef",
                  "localizedName": "beef",
                  "image": "beef-cubes-raw.png"
                }
              ],
              "equipment": [

              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Remove the beef from the skillet.",
              "ingredients": [
                {
                  "id": 23572,
                  "name": "beef",
                  "localizedName": "beef",
                  "image": "beef-cubes-raw.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Heat 1 tablespoon butter and the remaining oil in the skillet.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add the mushrooms and cook for 5 minutes or until tender, stirring occasionally.",
              "ingredients": [
                {
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "mushrooms.png"
                }
              ],
              "equipment": [

              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Add the shallot, garlic and rosemary and cook and stir for 30 seconds.   Stir in the concentrated broth, water and remaining butter and cook until the butter is melted.",
              "ingredients": [
                {
                  "id": 2036,
                  "name": "rosemary",
                  "localizedName": "rosemary",
                  "image": "rosemary.jpg"
                },
                {
                  "id": 11677,
                  "name": "shallot",
                  "localizedName": "shallot",
                  "image": "shallots.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 1006615,
                  "name": "broth",
                  "localizedName": "broth",
                  "image": "chicken-broth.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 7,
              "step": "Cut the beef diagonally against the grain into thin slices.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "grains",
                  "localizedName": "grains",
                  "image": ""
                },
                {
                  "id": 23572,
                  "name": "beef",
                  "localizedName": "beef",
                  "image": "beef-cubes-raw.png"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 8,
              "step": "Serve the mushroom mixture with the beef.",
              "ingredients": [
                {
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "mushrooms.png"
                },
                {
                  "id": 23572,
                  "name": "beef",
                  "localizedName": "beef",
                  "image": "beef-cubes-raw.png"
                }
              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/flank-steak-with-mushroom-sauce-631750"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 64,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 10,
      "spoonacularScore": 89.0,
      "healthScore": 45.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 244.85,
      "extendedIngredients": [
        {
          "id": 18371,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "baking powder",
          "original": "5 1/2 teaspoons baking powder",
          "originalString": "5 1/2 teaspoons baking powder",
          "originalName": "baking powder",
          "amount": 5.5,
          "unit": "teaspoons",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 5.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 5.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9040,
          "aisle": "Produce",
          "image": "bananas.jpg",
          "consistency": "solid",
          "name": "bananas",
          "original": "2 ripe but firm bananas, sliced thin",
          "originalString": "2 ripe but firm bananas, sliced thin",
          "originalName": "ripe but firm bananas, sliced thin",
          "amount": 2.0,
          "unit": "",
          "meta": [
            "firm",
            "ripe",
            "sliced",
            "thin"
          ],
          "metaInformation": [
            "firm",
            "ripe",
            "sliced",
            "thin"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "solid",
          "name": "butter",
          "original": "1/2 cup butter or margarine - (¼ lb)",
          "originalString": "1/2 cup butter or margarine - (¼ lb)",
          "originalName": "1/2 cup butter or margarine",
          "amount": 0.25,
          "unit": "lb",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 113.398,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 4582,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "liquid",
          "name": "canola oil",
          "original": "4 t. canola (or vegetable) oil",
          "originalString": "4 t. canola (or vegetable) oil",
          "originalName": "canola (or vegetable) oil",
          "amount": 4.0,
          "unit": "t",
          "meta": [
            "(or vegetable)"
          ],
          "metaInformation": [
            "(or vegetable)"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "solid",
          "name": "cinnamon",
          "original": "1/2 t. cinnamon",
          "originalString": "1/2 t. cinnamon",
          "originalName": "cinnamon",
          "amount": 0.5,
          "unit": "t",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "solid",
          "name": "cream cheese",
          "original": "8 ounces cream cheese",
          "originalString": "8 ounces cream cheese",
          "originalName": "cream cheese",
          "amount": 8.0,
          "unit": "ounces",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 8.0,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 226.796,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "solid",
          "name": "eggs",
          "original": "3 eggs",
          "originalString": "3 eggs",
          "originalName": "eggs",
          "amount": 3.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "solid",
          "name": "flour",
          "original": "10 1/2 cups all-purpose flour",
          "originalString": "10 1/2 cups all-purpose flour",
          "originalName": "all-purpose flour",
          "amount": 10.5,
          "unit": "cups",
          "meta": [
            "all-purpose"
          ],
          "metaInformation": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 10.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 2.484,
              "unitShort": "l",
              "unitLong": "liters"
            }
          }
        },
        {
          "id": 2025,
          "aisle": "Spices and Seasonings",
          "image": "ground-nutmeg.jpg",
          "consistency": "solid",
          "name": "ground nutmeg",
          "original": "dash of fresh ground nutmeg",
          "originalString": "dash of fresh ground nutmeg",
          "originalName": "fresh ground nutmeg",
          "amount": 1.0,
          "unit": "dash",
          "meta": [
            "fresh"
          ],
          "metaInformation": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "dash",
              "unitLong": "dash"
            }
          }
        },
        {
          "id": 19296,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "honey.png",
          "consistency": "liquid",
          "name": "honey",
          "original": "1 T. honey",
          "originalString": "1 T. honey",
          "originalName": "honey",
          "amount": 1.0,
          "unit": "T",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "original": "1/2 t. lemon juice",
          "originalString": "1/2 t. lemon juice",
          "originalName": "lemon juice",
          "amount": 0.5,
          "unit": "t",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19911,
          "aisle": "Cereal",
          "image": "maple-syrup.png",
          "consistency": "liquid",
          "name": "maple syrup",
          "original": "maple syrup, for serving",
          "originalString": "maple syrup, for serving",
          "originalName": "maple syrup, for serving",
          "amount": 4.0,
          "unit": "servings",
          "meta": [
            "for serving"
          ],
          "metaInformation": [
            "for serving"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "liquid",
          "name": "milk",
          "original": "1 c. milk",
          "originalString": "1 c. milk",
          "originalName": "milk",
          "amount": 1.0,
          "unit": "c",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "original": "1/2 teaspoon salt",
          "originalString": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 18069,
          "aisle": "Bakery/Bread",
          "image": "white-bread.jpg",
          "consistency": "solid",
          "name": "white sandwich bread",
          "original": "8 slices of good quality white sandwich bread",
          "originalString": "8 slices of good quality white sandwich bread",
          "originalName": "good quality white sandwich bread",
          "amount": 8.0,
          "unit": "slices",
          "meta": [
            "white"
          ],
          "metaInformation": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 8.0,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 8.0,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        }
      ],
      "id": 633971,
      "title": "Banana & Cream Cheese Stuffed French Toast",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/ZJMSFPMM/banana-cream-cheese-stuffed-french-toast",
      "image": "https://spoonacular.com/recipeImages/633971-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Banana & Cream Cheese Stuffed French Toast is ready <b>in around 45 minutes</b> and is definitely an awesome <b>vegetarian</b> option for lovers of American food. This morn meal has <b>1978 calories</b>, <b>49g of protein</b>, and <b>57g of fat</b> per serving. For <b>$2.45 per serving</b>, this recipe <b>covers 51%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up milk, honey, maple syrup, and a few other things to make it today. 10 people have tried and liked this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 90%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/cream-cheese-stuffed-french-toast-739876\">Cream Cheese-Stuffed French Toast</a>, <a href=\"https://spoonacular.com/recipes/banana-and-cream-cheese-stuff-french-toast-49537\">Bananan And Cream Cheese Stuff French Toast</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-cream-cheese-stuffed-french-toast-615250\">Pumpkin Cream Cheese Stuffed French Toast</a> for similar recipes.",
      "cuisines": [
        "American"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [

      ],
      "winePairing": {
        "pairedWines": [

        ],
        "pairingText": "",
        "productMatches": [

        ]
      },
      "instructions": "<ol><li>In a small bowl combine the softened cream cheese, honey, cinnamon, nutmeg and lemon juice, set aside while preparing the batter.</li><li>Whisk together all of the batter ingredients until thoroughly mixed. (This is a breeze if you use a blender.) Pour the batter into a wide, shallow dish (like a pie plate).</li><li>Spread the filling mixture equally over 1 side of each slice of bread, divide the sliced bananas between 4 slices of the bread, top with the remaining 4 slices, press lightly.</li><li>Melt 2 t. butter and 2 t. oil in a 12 inch nonstick skillet over medium heat until the butter foams and then subsides. Working with one sandwich at a time dip both sides in the batter and let the excess drip away, add to the hot pan, repeat with a second sandwich. Cook until golden brown on the first side, around 3-5 minutes, flip and repeat on the second side. Repeat this process with the remaining, oil, butter and sandwiches. To serve, cut into triangles and serve with maple syrup.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a small bowl combine the softened cream cheese, honey, cinnamon, nutmeg and lemon juice, set aside while preparing the batter.",
              "ingredients": [
                {
                  "id": 1017,
                  "name": "cream cheese",
                  "localizedName": "cream cheese",
                  "image": "cream-cheese.jpg"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "cinnamon.jpg"
                },
                {
                  "id": 2025,
                  "name": "nutmeg",
                  "localizedName": "nutmeg",
                  "image": "ground-nutmeg.jpg"
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "honey.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Whisk together all of the batter ingredients until thoroughly mixed. (This is a breeze if you use a blender.)",
              "ingredients": [
                {
                  "id": 0,
                  "name": "breeze",
                  "localizedName": "breeze",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "blender.png"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Pour the batter into a wide, shallow dish (like a pie plate).",
              "ingredients": [

              ],
              "equipment": [

              ]
            },
            {
              "number": 4,
              "step": "Spread the filling mixture equally over 1 side of each slice of bread, divide the sliced bananas between 4 slices of the bread, top with the remaining 4 slices, press lightly.Melt 2 t. butter and 2 t. oil in a 12 inch nonstick skillet over medium heat until the butter foams and then subsides. Working with one sandwich at a time dip both sides in the batter and let the excess drip away, add to the hot pan, repeat with a second sandwich. Cook until golden brown on the first side, around 3-5 minutes, flip and repeat on the second side. Repeat this process with the remaining, oil, butter and sandwiches. To serve, cut into triangles and serve with maple syrup.",
              "ingredients": [
                {
                  "id": 19911,
                  "name": "maple syrup",
                  "localizedName": "maple syrup",
                  "image": "maple-syrup.png"
                },
                {
                  "id": 9040,
                  "name": "banana",
                  "localizedName": "banana",
                  "image": "bananas.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/banana-cream-cheese-stuffed-french-toast-633971"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 16,
      "spoonacularScore": 24.0,
      "healthScore": 2.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 144.3,
      "extendedIngredients": [
        {
          "id": 1011053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "white-cream.png",
          "consistency": "liquid",
          "name": "double cream",
          "original": "200ml double cream",
          "originalString": "200ml double cream",
          "originalName": "double cream",
          "amount": 200.0,
          "unit": "ml",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 6.764,
              "unitShort": "fl. oz",
              "unitLong": "fl. ozs"
            },
            "metric": {
              "amount": 200.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9079,
          "aisle": "Dried Fruits;Produce",
          "image": "dried-cranberries.jpg",
          "consistency": "solid",
          "name": "dried cranberries",
          "original": "¼ cup dried cranberries",
          "originalString": "¼ cup dried cranberries",
          "originalName": "dried cranberries",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "dried"
          ],
          "metaInformation": [
            "dried"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1125,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-yolk.jpg",
          "consistency": "solid",
          "name": "egg yolks",
          "original": "4 egg yolks",
          "originalString": "4 egg yolks",
          "originalName": "egg yolks",
          "amount": 4.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "liquid",
          "name": "full fat milk",
          "original": "300ml full fat milk",
          "originalString": "300ml full fat milk",
          "originalName": "full fat milk",
          "amount": 300.0,
          "unit": "ml",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.268,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 300.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "solid",
          "name": "sugar",
          "original": "75g caster sugar",
          "originalString": "75g caster sugar",
          "originalName": "caster sugar",
          "amount": 75.0,
          "unit": "g",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.646,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 75.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "original": "1 tsp vanilla extract",
          "originalString": "1 tsp vanilla extract",
          "originalName": "vanilla extract",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 19087,
          "aisle": "Baking",
          "image": "white-chocolate.jpg",
          "consistency": "solid",
          "name": "white chocolate",
          "original": "200g white chocolate, coarsely chopped",
          "originalString": "200g white chocolate, coarsely chopped",
          "originalName": "white chocolate, coarsely chopped",
          "amount": 200.0,
          "unit": "g",
          "meta": [
            "white",
            "coarsely chopped"
          ],
          "metaInformation": [
            "white",
            "coarsely chopped"
          ],
          "measures": {
            "us": {
              "amount": 7.055,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 200.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "id": 665203,
      "title": "White chocolate-cranberry ice cream",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "http://www.foodista.com/recipe/HSYFZTRN/white-chocolate-cranberries-ice-cream",
      "image": "https://spoonacular.com/recipeImages/665203-556x370.jpg",
      "imageType": "jpg",
      "summary": "White chocolate-cranberry ice cream is a <b>gluten free</b> dessert. This recipe makes 6 servings with <b>430 calories</b>, <b>6g of protein</b>, and <b>28g of fat</b> each. For <b>$1.44 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 16 would say it hit the spot. Head to the store and pick up vanillan extract, cranberries, egg yolks, and a few other things to make it today. It will be a hit at your <b>Summer</b> event. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 27%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/the-secret-ingredient-cranberry-cranberry-ice-cream-with-white-chocolate-chunks-207558\">The Secret Ingredient (Cranberry): Cranberry Ice Cream with White Chocolate Chunks</a>, <a href=\"https://spoonacular.com/recipes/white-chocolate-blackberry-cranberry-cream-bars-690423\">White Chocolate Blackberry Cranberry Cream Bars</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-cream-cheese-white-chocolate-chip-cookies-506006\">Cranberry Cream Cheese White Chocolate Chip Cookies</a> for similar recipes.",
      "cuisines": [

      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free"
      ],
      "occasions": [
        "summer"
      ],
      "winePairing": {

      },
      "instructions": "<ol><li>In a medium saucepan boil the milk until it starts to bubble gently. Remove from flame and set aside.</li><li>Meanwhile whisk the egg yolks and sugar together for 3 minutes until pale yellow and double in volume.</li><li>Pour the milk on to the egg mixture and stir and then gently pour the mixture back in to the saucepan and simmer very lightly. Stir continuously until the custard mix thickens or coats the back of a wooden spoon.</li><li>Add the chopped chocolate stirring until the heat melts the chocolate.</li><li>Cool the mixture, stir in the vanilla extract and put it in the fridge to chill.</li><li>Once chilled, add the cream to the mixture. Stir and combine.</li><li>Pour the mixture into an ice cream machine and churn until frozen.</li><li>Add  dried cranberries in the last 5 minutes of churning and let the machine stir them in.</li><li>Transfer to plastic container and place in the freezer for 3 hours before serving.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a medium saucepan boil the milk until it starts to bubble gently.",
              "ingredients": [
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Remove from flame and set aside.Meanwhile whisk the egg yolks and sugar together for 3 minutes until pale yellow and double in volume.",
              "ingredients": [
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                }
              ],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Pour the milk on to the egg mixture and stir and then gently pour the mixture back in to the saucepan and simmer very lightly. Stir continuously until the custard mix thickens or coats the back of a wooden spoon.",
              "ingredients": [
                {
                  "id": 19169,
                  "name": "custard powder",
                  "localizedName": "custard powder",
                  "image": "custard.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404732,
                  "name": "wooden spoon",
                  "localizedName": "wooden spoon",
                  "image": "wooden-spoon.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add the chopped chocolate stirring until the heat melts the chocolate.Cool the mixture, stir in the vanilla extract and put it in the fridge to chill.Once chilled, add the cream to the mixture. Stir and combine.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "localizedName": "vanilla extract",
                  "image": "vanilla-extract.jpg"
                },
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 1053,
                  "name": "cream",
                  "localizedName": "cream",
                  "image": "fluid-cream.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 5,
              "step": "Pour the mixture into an ice cream machine and churn until frozen.",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "vanilla-ice-cream.png"
                }
              ],
              "equipment": [
                {
                  "id": 404791,
                  "name": "ice cream machine",
                  "localizedName": "ice cream machine",
                  "image": "ice-cream-machine.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Add  dried cranberries in the last 5 minutes of churning and let the machine stir them in.",
              "ingredients": [
                {
                  "id": 9079,
                  "name": "dried cranberries",
                  "localizedName": "dried cranberries",
                  "image": "dried-cranberries.jpg"
                }
              ],
              "equipment": [

              ],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Transfer to plastic container and place in the freezer for 3 hours before serving.",
              "ingredients": [

              ],
              "equipment": [

              ],
              "length": {
                "number": 180,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/white-chocolate-cranberry-ice-cream-665203"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 11,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 11,
      "spoonacularScore": 93.0,
      "healthScore": 67.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 478.14,
      "extendedIngredients": [
        {
          "id": 11011,
          "aisle": "Produce",
          "image": "asparagus.png",
          "consistency": "solid",
          "name": "asparagus",
          "original": "1 pound green or white asparagus, woody ends snapped off & discarded",
          "originalString": "1 pound green or white asparagus, woody ends snapped off & discarded",
          "originalName": "green or white asparagus, woody ends snapped off & discarded",
          "amount": 1.0,
          "unit": "pound",
          "meta": [
            "white",
            "green"
          ],
          "metaInformation": [
            "white",
            "green"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "lb",
              "unitLong": "pound"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "solid",
          "name": "chili flakes",
          "original": "1/2 teaspoon chili pepper flakes",
          "originalString": "1/2 teaspoon chili pepper flakes",
          "originalName": "chili pepper flakes",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11297,
          "aisle": "Produce;Spices and Seasonings",
          "image": "parsley.jpg",
          "consistency": "solid",
          "name": "flat leaf parsley",
          "original": "1 cup flat leaf parsley, lightly packed & rough chopped",
          "originalString": "1 cup flat leaf parsley, lightly packed & rough chopped",
          "originalName": "flat leaf parsley, lightly packed & rough chopped",
          "amount": 1.0,
          "unit": "cup",
          "meta": [
            "packed",
            "chopped"
          ],
          "metaInformation": [
            "packed",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce",
          "image": "mint.jpg",
          "consistency": "solid",
          "name": "fresh mint leaves",
          "original": "¼ cup fresh mint leaves",
          "originalString": "¼ cup fresh mint leaves",
          "originalName": "fresh mint leaves",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "fresh"
          ],
          "metaInformation": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic cloves",
          "original": "3 to 5 garlic cloves, rough chopped",
          "originalString": "3 to 5 garlic cloves, rough chopped",
          "originalName": "to 5 garlic cloves, rough chopped",
          "amount": 3.0,
          "unit": "",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic cloves",
          "original": "4 garlic cloves, peeled",
          "originalString": "4 garlic cloves, peeled",
          "originalName": "garlic cloves, peeled",
          "amount": 4.0,
          "unit": "",
          "meta": [
            "peeled"
          ],
          "metaInformation": [
            "peeled"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1082047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "kosher salt",
          "original": "Kosher salt",
          "originalString": "Kosher salt",
          "originalName": "Kosher salt",
          "amount": 4.0,
          "unit": "servings",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "original": "3 tablespoons lemon juice",
          "originalString": "3 tablespoons lemon juice",
          "originalName": "lemon juice",
          "amount": 3.0,
          "unit": "tablespoons",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "liquid",
          "name": "olive oil",
          "original": "1/4 cup of extra-virgin olive oil",
          "originalString": "1/4 cup of extra-virgin olive oil",
          "originalName": "extra-virgin olive oil",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "extra-virgin"
          ],
          "metaInformation": [
            "extra-virgin"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2027,
          "aisle": "Produce;Spices and Seasonings",
          "image": "oregano.jpg",
          "consistency": "solid",
          "name": "oregano leaves",
          "original": "¼ cup fresh oregano leaves",
          "originalString": "¼ cup fresh oregano leaves",
          "originalName": "fresh oregano leaves",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "fresh"
          ],
          "metaInformation": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "solid",
          "name": "pepper",
          "original": "1 teaspoon freshly ground pepper",
          "originalString": "1 teaspoon freshly ground pepper",
          "originalName": "freshly ground pepper",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [
            "freshly ground"
          ],
          "metaInformation": [
            "freshly ground"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "solid",
          "name": "pepper",
          "original": "Freshly cracked black pepper",
          "originalString": "Freshly cracked black pepper",
          "originalName": "Freshly cracked black pepper",
          "amount": 4.0,
          "unit": "servings",
          "meta": [
            "black"
          ],
          "metaInformation": [
            "black"
          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4.0,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1022068,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "red-wine-vinegar.jpg",
          "consistency": "liquid",
          "name": "red wine vinegar",
          "original": "2 tablespoons Red wine vinegar",
          "originalString": "2 tablespoons Red wine vinegar",
          "originalName": "Red wine vinegar",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "red"
          ],
          "metaInformation": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11677,
          "aisle": "Produce",
          "image": "shallots.jpg",
          "consistency": "solid",
          "name": "shallot",
          "original": "2 tablespoons shallot, chopped",
          "originalString": "2 tablespoons shallot, chopped",
          "originalName": "shallot, chopped",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 23232,
          "aisle": "Meat",
          "image": "ribeye-raw.jpg",
          "consistency": "solid",
          "name": "steaks",
          "original": "2 skirt steaks",
          "originalString": "2 skirt steaks",
          "originalName": "skirt steaks",
          "amount": 2.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        }
      ],
      "id": 638626,
      "title": "Chimichurri Skirt Steak with Grilled Asparagus",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.foodista.com/recipe/3VXHGQB6/chimichurri-skirt-steak-with-grilled-asparagus",
      "image": "https://spoonacular.com/recipeImages/638626-556x370.jpg",
      "imageType": "jpg",
      "summary": "The recipe Chimichurri Skirt Steak with Grilled Asparagus could satisfy your South American craving in around <b>45 minutes</b>. For <b>$4.78 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This main course has <b>410 calories</b>, <b>27g of protein</b>, and <b>30g of fat</b> per serving. It is a good option if you're following a <b>caveman, gluten free, dairy free, and primal</b> diet. If you have lemon juice, wine vinegar, garlic cloves, and a few other ingredients on hand, you can make it. To use up the lemon juice you could follow this main course with the <a href=\"https://spoonacular.com/recipes/lemon-shortbread-cookies-with-lemon-icing-a-tribute-to-aunt-roxanne-487814\">Lemon Shortbread Cookies with Lemon Icing {A Tribute to Aunt Roxanne}</a> as a dessert. Not a lot of people made this recipe, and 8 would say it hit the spot. It is perfect for <b>The Fourth Of July</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is amazing. Try <a href=\"https://spoonacular.com/recipes/grilled-skirt-steak-with-chimichurri-779903\">Grilled Skirt Steak with Chimichurri</a>, <a href=\"https://spoonacular.com/recipes/grilled-skirt-steak-with-chimichurri-sauce-542146\">GRILLED SKIRT STEAK WITH CHIMICHURRI SAUCE</a>, and <a href=\"https://spoonacular.com/recipes/grilled-skirt-steak-with-green-and-smokey-red-chimichurri-384707\">Grilled Skirt Steak with Green and Smokey Red Chimichurri</a> for similar recipes.",
      "cuisines": [
        "South American",
        "Latin American"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal"
      ],
      "occasions": [
        "valentine's day",
        "father's day",
        "4th of july",
        "summer"
      ],
      "winePairing": {
        "pairedWines": [
          "merlot",
          "cabernet sauvignon",
          "pinot noir"
        ],
        "pairingText": "Merlot, Cabernet Sauvignon, and Pinot Noir are great choices for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. You could try Cannonball Eleven Merlot. Reviewers quite like it with a 4.8 out of 5 star rating and a price of about 22 dollars per bottle.",
        "productMatches": [
          {
            "id": 470724,
            "title": "Cannonball Eleven Merlot",
            "description": "Voluptuous and impressively structured with black cherry, red currant, and raspberry fruit. This wine shows lovely notes of cracked pepper, clove spice, and classic dried Herbs de Provence, an interplay that showcases the range of this singular varietal.Blend: 94% Merlot, 6% Petite Sirah",
            "price": "$21.99",
            "imageUrl": "https://spoonacular.com/productImages/470724-312x231.jpg",
            "averageRating": 0.96,
            "ratingCount": 5.0,
            "score": 0.8975,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcannonball-eleven-merlot-2016%2F520248"
          }
        ]
      },
      "instructions": "<ol><li>Place all chimichurri sauce ingredients except for the olive oil in a food processor &amp; pulse until well chopped. While the food processor is going, slowly pour the olive oil into the mixture until blended.  Reserve half of the sauce to serve on the side with the meal.</li><li>Season skirt steaks with salt &amp; pepper on bother sides.  Spoon the remaining chimichurri sauce over the steaks &amp; let marinate for 30 minutes up to overnight.</li><li>Pre-heat the grill to 350 to 400 F.</li><li>In a plastic resealable bag, add asparagus, olive oil, garlic, salt &amp; pepper.  Shake to coat &amp; place in a grill basket.</li><li>Place the steak &amp; grill basket of asparagus directly over a hot grill.  Gently toss the asparagus for even grilling &amp; baste with garlic, olive oil mixture  10 minutes.</li><li>Grill the skirt steak to desired temperature  5 to 8 minutes per side.</li><li>Remove from grill &amp; let steak rest for 10 minutes before slice long strips.  Spoon reserved chimichurri sauce over steak &amp; serve with asparagus on the side.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Place all chimichurri sauce ingredients except for the olive oil in a food processor &amp; pulse until well chopped. While the food processor is going, slowly pour the olive oil into the mixture until blended.  Reserve half of the sauce to serve on the side with the meal.Season skirt steaks with salt &amp; pepper on bother sides.  Spoon the remaining chimichurri sauce over the steaks &amp; let marinate for 30 minutes up to overnight.Pre-heat the grill to 350 to 400 F.In a plastic resealable bag, add asparagus, olive oil, garlic, salt &amp; pepper.  Shake to coat &amp; place in a grill basket.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chimichurri",
                  "localizedName": "chimichurri",
                  "image": ""
                },
                {
                  "id": 11011,
                  "name": "asparagus",
                  "localizedName": "asparagus",
                  "image": "asparagus.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 23232,
                  "name": "steak",
                  "localizedName": "steak",
                  "image": "ribeye-raw.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "shake",
                  "localizedName": "shake",
                  "image": ""
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                },
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "grill.jpg"
                }
              ],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Place the steak &amp; grill basket of asparagus directly over a hot grill.  Gently toss the asparagus for even grilling &amp; baste with garlic, olive oil mixture  10 minutes.Grill the skirt steak to desired temperature  5 to 8 minutes per side.",
              "ingredients": [
                {
                  "id": 23167,
                  "name": "skirt steak",
                  "localizedName": "skirt steak",
                  "image": "skirt-steak.jpg"
                },
                {
                  "id": 11011,
                  "name": "asparagus",
                  "localizedName": "asparagus",
                  "image": "asparagus.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 23232,
                  "name": "steak",
                  "localizedName": "steak",
                  "image": "ribeye-raw.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "grill.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Remove from grill &amp; let steak rest for 10 minutes before slice long strips.  Spoon reserved chimichurri sauce over steak &amp; serve with asparagus on the side.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chimichurri",
                  "localizedName": "chimichurri",
                  "image": ""
                },
                {
                  "id": 11011,
                  "name": "asparagus",
                  "localizedName": "asparagus",
                  "image": "asparagus.png"
                },
                {
                  "id": 23232,
                  "name": "steak",
                  "localizedName": "steak",
                  "image": "ribeye-raw.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "grill.jpg"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/chimichurri-skirt-steak-with-grilled-asparagus-638626"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 61,
      "gaps": "no",
      "lowFodmap": true,
      "aggregateLikes": 9,
      "spoonacularScore": 65.0,
      "healthScore": 14.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 406.09,
      "extendedIngredients": [
        {
          "id": 10123,
          "aisle": "Meat",
          "image": "raw-bacon.png",
          "consistency": "solid",
          "name": "bacon",
          "original": "1 pound bacon",
          "originalString": "1 pound bacon",
          "originalName": "bacon",
          "amount": 1.0,
          "unit": "pound",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "lb",
              "unitLong": "pound"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19095,
          "aisle": "Frozen",
          "image": "vanilla-ice-cream.png",
          "consistency": "solid",
          "name": "ice cream",
          "original": "1 pint of Dulce de Leche Ice Cream, warmed just enough so you c",
          "originalString": "1 pint of Dulce de Leche Ice Cream, warmed just enough so you c",
          "originalName": "Dulce de Leche Ice Cream, warmed just enough so you c",
          "amount": 1.0,
          "unit": "pint",
          "meta": [
            "warmed"
          ],
          "metaInformation": [
            "warmed"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "pts",
              "unitLong": "pint"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "pts",
              "unitLong": "pint"
            }
          }
        },
        {
          "id": 12142,
          "aisle": "Nuts;Baking",
          "image": "pecans.jpg",
          "consistency": "solid",
          "name": "pecans",
          "original": "1/4 cup of chopped pecans",
          "originalString": "1/4 cup of chopped pecans",
          "originalName": "chopped pecans",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "chopped"
          ],
          "metaInformation": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 633314,
      "title": "Bacon Ice Cream",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "http://www.foodista.com/recipe/G6ZNLSC3/bacon-ice-cream",
      "image": "https://spoonacular.com/recipeImages/633314-556x370.jpg",
      "imageType": "jpg",
      "summary": "One serving contains <b>1521 calories</b>, <b>38g of protein</b>, and <b>125g of fat</b>. For <b>$4.06 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Summer</b> event. 9 people were impressed by this recipe. It is a good option if you're following a <b>gluten free, dairy free, and fodmap friendly</b> diet. Head to the store and pick up bacon, dulce de leche ice cream, pecans, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 68%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/strawberry-cookies-and-cream-ice-cream-917912\">Strawberry Cookies and Cream Ice Cream</a>, <a href=\"https://spoonacular.com/recipes/avocado-ice-cream-913453\">Avocado Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/paleo-strawberry-ice-cream-912318\">Paleo Strawberry Ice Cream</a> for similar recipes.",
      "cuisines": [

      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "fodmap friendly"
      ],
      "occasions": [
        "summer"
      ],
      "winePairing": {
        "pairedWines": [
          "cream sherry",
          "moscato dasti",
          "port"
        ],
        "pairingText": "Ice Cream can be paired with Cream Sherry, Moscato d'Asti, and Port. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. You could try NV Solera Cream Sherry. Reviewers quite like it with a 4.5 out of 5 star rating and a price of about 17 dollars per bottle.",
        "productMatches": [
          {
            "id": 428475,
            "title": "NV Solera Cream Sherry",
            "description": "The Solera Cream Sherry has a brilliant amber and deep copper hue. With butterscotch and pecan aromas, the sweet salted nut and brown spice aromas carry a complex caramel accent. A sweet entry leads to a rounded, lush, moderately full-bodied palate with a lengthy, flavorful finish.",
            "price": "$16.99",
            "imageUrl": "https://spoonacular.com/productImages/428475-312x231.jpg",
            "averageRating": 0.9,
            "ratingCount": 4.0,
            "score": 0.823076923076923,
            "link": "https://www.amazon.com/NV-Solera-Cream-Sherry-750/dp/B00HSME8OW?tag=spoonacular-20"
          }
        ]
      },
      "instructions": "<ol><li>Mix bacon and nuts in bowl. Set aside a teaspoon of bacon and nuts for topping.</li><li>Mix chopped bacon and nuts into ice cream, then place back in freezer.</li><li>After Bacon Ice Cream is frozen, scoop into cup and top with bits of bacon and nuts. Enjoy!</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Mix bacon and nuts in bowl. Set aside a teaspoon of bacon and nuts for topping.",
              "ingredients": [
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "raw-bacon.png"
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "nuts-mixed.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix chopped bacon and nuts into ice cream, then place back in freezer.After Bacon Ice Cream is frozen, scoop into cup and top with bits of bacon and nuts. Enjoy!",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "vanilla-ice-cream.png"
                },
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "raw-bacon.png"
                },
                {
                  "id": 12135,
                  "name": "nuts",
                  "localizedName": "nuts",
                  "image": "nuts-mixed.jpg"
                }
              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/bacon-ice-cream-633314"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 13,
      "spoonacularScore": 61.0,
      "healthScore": 13.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 111.13,
      "extendedIngredients": [
        {
          "id": 11098,
          "aisle": "Produce",
          "image": "brussels-sprouts.jpg",
          "consistency": "solid",
          "name": "brussel sprouts",
          "original": "250g whole brussel sprouts",
          "originalString": "250g whole brussel sprouts",
          "originalName": "whole brussel sprouts",
          "amount": 250.0,
          "unit": "g",
          "meta": [
            "whole"
          ],
          "metaInformation": [
            "whole"
          ],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "original": "1/2 teaspoon salt",
          "originalString": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "liquid",
          "name": "water",
          "original": "4 cups water",
          "originalString": "4 cups water",
          "originalName": "water",
          "amount": 4.0,
          "unit": "cups",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 4.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 946.352,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1001001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter.jpg",
          "consistency": "solid",
          "name": "salted butter",
          "original": "1 tablespoon salted butter",
          "originalString": "1 tablespoon salted butter",
          "originalName": "salted butter",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "salted"
          ],
          "metaInformation": [
            "salted"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "1 tablespoon minced garlic",
          "originalString": "1 tablespoon minced garlic",
          "originalName": "minced garlic",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [
            "minced"
          ],
          "metaInformation": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 43212,
          "aisle": "Meat",
          "image": "bacon-bits.jpg",
          "consistency": "solid",
          "name": "bacon bits",
          "original": "1 tablespoon bacon bits",
          "originalString": "1 tablespoon bacon bits",
          "originalName": "bacon bits",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "solid",
          "name": "salt and pepper",
          "original": "salt and pepper to taste (about 1/4 teaspoon each)",
          "originalString": "salt and pepper to taste (about 1/4 teaspoon each)",
          "originalName": "salt and pepper to taste (about each)",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "to taste"
          ],
          "metaInformation": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "original": "1 teaspoon lemon juice",
          "originalString": "1 teaspoon lemon juice",
          "originalName": "lemon juice",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "id": 636359,
      "title": "Brussel Sprouts in Bacon and Garlic Sauce",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "https://www.foodista.com/recipe/HLHQZVB7/brussel-sprouts-in-bacon-and-garlic-sauce",
      "image": "https://spoonacular.com/recipeImages/636359-556x370.jpg",
      "imageType": "jpg",
      "summary": "Brussel Sprouts in Bacon and Garlic Sauce is a <b>gluten free</b> side dish. One serving contains <b>127 calories</b>, <b>6g of protein</b>, and <b>7g of fat</b>. This recipe serves 2 and costs $1.11 per serving. This recipe from Foodista has 13 fans. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. Head to the store and pick up butter, salt, garlic, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 62%</b>. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/bacon-wrapped-brussel-sprouts-1008109\">Bacon Wrapped Brussel Sprouts</a>, <a href=\"https://spoonacular.com/recipes/roasted-brussel-sprouts-with-bacon-528358\">Roasted Brussel Sprouts with Bacon</a>, and <a href=\"https://spoonacular.com/recipes/feta-garlic-brussel-sprouts-511578\">Feta Garlic Brussel Sprouts</a>.",
      "cuisines": [

      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free"
      ],
      "occasions": [

      ],
      "winePairing": {

      },
      "instructions": "Wash 250g of brussel sprouts. Remove any old hard out leaves.\nBring 4 cups of water to the boil and add 1/2 teaspoon of salt.\nAdd the brussel sprouts to the boiling water and leave to boil at medium heat for 4 minutes or until sprouts are tender but still crunchy.\nDrain the brussel sprouts.\nReturn the saucepan to the hot stove and add 1 tablespoon of butter.\nWhile the butter is melting, cut the brussel sprouts in half.\nAdd 1 tablespoon of minced garlic to the melted butter. Saut for a few seconds till garlic is fragrant but not brown.\nReturn the cut brussel sprouts to the saucepan. Toss the brussel sprouts lightly in the garlic-butter sauce.\nAdd 1 tablespoon of bacon bits. I keep a jar of ready to use bacon bits in the fridge at all times for this dish (and for my Mushroom Delight dish). You can also use freshly pan fried and crumbled bacon, but I like to cook this fast.\nSeason to taste with salt and pepper. I always use Masterfoods Garlic Pepper to season my dishes. A few shakes of this and its done.\nAdd a squeeze of fresh lemon juice (about 1 teaspoon).\nToss everything together. Serve with some fresh lemons on the side for extra tangy flavour, if preferred. You can also garnish with some toasted almond flakes.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Wash 250g of brussel sprouts.",
              "ingredients": [
                {
                  "id": 11098,
                  "name": "brussels sprouts",
                  "localizedName": "brussels sprouts",
                  "image": "brussels-sprouts.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 2,
              "step": "Remove any old hard out leaves.",
              "ingredients": [

              ],
              "equipment": [

              ]
            },
            {
              "number": 3,
              "step": "Bring 4 cups of water to the boil and add 1/2 teaspoon of salt.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 4,
              "step": "Add the brussel sprouts to the boiling water and leave to boil at medium heat for 4 minutes or until sprouts are tender but still crunchy.",
              "ingredients": [
                {
                  "id": 11098,
                  "name": "brussels sprouts",
                  "localizedName": "brussels sprouts",
                  "image": "brussels-sprouts.jpg"
                },
                {
                  "id": 11001,
                  "name": "sprouts",
                  "localizedName": "sprouts",
                  "image": "alfalfa-sprouts.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [

              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Drain the brussel sprouts.",
              "ingredients": [
                {
                  "id": 11098,
                  "name": "brussels sprouts",
                  "localizedName": "brussels sprouts",
                  "image": "brussels-sprouts.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 6,
              "step": "Return the saucepan to the hot stove and add 1 tablespoon of butter.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                },
                {
                  "id": 404794,
                  "name": "stove",
                  "localizedName": "stove",
                  "image": "oven.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "While the butter is melting, cut the brussel sprouts in half.",
              "ingredients": [
                {
                  "id": 11098,
                  "name": "brussels sprouts",
                  "localizedName": "brussels sprouts",
                  "image": "brussels-sprouts.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 8,
              "step": "Add 1 tablespoon of minced garlic to the melted butter. Saut for a few seconds till garlic is fragrant but not brown.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "minced garlic",
                  "localizedName": "minced garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 9,
              "step": "Return the cut brussel sprouts to the saucepan. Toss the brussel sprouts lightly in the garlic-butter sauce.",
              "ingredients": [
                {
                  "id": 11098,
                  "name": "brussels sprouts",
                  "localizedName": "brussels sprouts",
                  "image": "brussels-sprouts.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 10,
              "step": "Add 1 tablespoon of bacon bits. I keep a jar of ready to use bacon bits in the fridge at all times for this dish (and for my Mushroom Delight dish). You can also use freshly pan fried and crumbled bacon, but I like to cook this fast.",
              "ingredients": [
                {
                  "id": 99229,
                  "name": "real bacon pieces",
                  "localizedName": "real bacon pieces",
                  "image": "bacon-bits.jpg"
                },
                {
                  "id": 43212,
                  "name": "bacon bits",
                  "localizedName": "bacon bits",
                  "image": "bacon-bits.jpg"
                },
                {
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "mushrooms.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            },
            {
              "number": 11,
              "step": "Season to taste with salt and pepper. I always use Masterfoods Garlic Pepper to season my dishes. A few shakes of this and its done.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 12,
              "step": "Add a squeeze of fresh lemon juice (about 1 teaspoon).",
              "ingredients": [
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                }
              ],
              "equipment": [

              ]
            },
            {
              "number": 13,
              "step": "Toss everything together.",
              "ingredients": [

              ],
              "equipment": [

              ]
            },
            {
              "number": 14,
              "step": "Serve with some fresh lemons on the side for extra tangy flavour, if preferred. You can also garnish with some toasted almond flakes.",
              "ingredients": [
                {
                  "id": 10112061,
                  "name": "sliced almonds",
                  "localizedName": "sliced almonds",
                  "image": "almonds.jpg"
                },
                {
                  "id": 9150,
                  "name": "lemon",
                  "localizedName": "lemon",
                  "image": "lemon.png"
                }
              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/brussel-sprouts-in-bacon-and-garlic-sauce-636359"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 22,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 26,
      "spoonacularScore": 94.0,
      "healthScore": 53.0,
      "creditsText": "Afrolems",
      "license": "CC BY 4.0",
      "sourceName": "Afrolems",
      "pricePerServing": 241.7,
      "extendedIngredients": [
        {
          "id": 12118,
          "aisle": "Canned and Jarred;Milk, Eggs, Other Dairy",
          "image": "coconut-milk.png",
          "consistency": "liquid",
          "name": "coconut milk",
          "original": "2 cups of coconut milk",
          "originalString": "2 cups of coconut milk",
          "originalName": "coconut milk",
          "amount": 2.0,
          "unit": "cups",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "corn starch",
          "original": "1 tablespoon of corn starch",
          "originalString": "1 tablespoon of corn starch",
          "originalName": "corn starch",
          "amount": 1.0,
          "unit": "tablespoon",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 2015,
          "aisle": "Spices and Seasonings",
          "image": "curry-powder.jpg",
          "consistency": "solid",
          "name": "curry powder",
          "original": "2 tablespoons of curry powder",
          "originalString": "2 tablespoons of curry powder",
          "originalName": "curry powder",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "solid",
          "name": "garlic",
          "original": "1 clove of garlic (chopped)",
          "originalString": "1 clove of garlic (chopped)",
          "originalName": "garlic (chopped)",
          "amount": 1.0,
          "unit": "clove",
          "meta": [
            "chopped",
            "()"
          ],
          "metaInformation": [
            "chopped",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "clove",
              "unitLong": "clove"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "clove",
              "unitLong": "clove"
            }
          }
        },
        {
          "id": 10014412,
          "aisle": "Frozen",
          "image": "ice-cubes.png",
          "consistency": "solid",
          "name": "ice cubes",
          "original": "Seasoning cubes",
          "originalString": "Seasoning cubes",
          "originalName": "Seasoning",
          "amount": 1.0,
          "unit": "cubes",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cubes",
              "unitLong": "cube"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "cubes",
              "unitLong": "cube"
            }
          }
        },
        {
          "id": 15050,
          "aisle": "Seafood",
          "image": "mackerel-fresh.jpg",
          "consistency": "solid",
          "name": "mackerel",
          "original": "1 medium piece of Mackerel (chopped in 4 pieces)",
          "originalString": "1 medium piece of Mackerel (chopped in 4 pieces)",
          "originalName": "Mackerel (chopped in 4 pieces)",
          "amount": 1.0,
          "unit": "medium piece",
          "meta": [
            "chopped",
            "( in 4 pieces)"
          ],
          "metaInformation": [
            "chopped",
            "( in 4 pieces)"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "medium piece",
              "unitLong": "medium piece"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "medium piece",
              "unitLong": "medium piece"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "solid",
          "name": "onion",
          "original": "1/2 bulb of onion",
          "originalString": "1/2 bulb of onion",
          "originalName": "bulb of onion",
          "amount": 0.5,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 16033,
          "aisle": "Pasta and Rice;Canned and Jarred",
          "image": "kidney-beans.jpg",
          "consistency": "solid",
          "name": "red kidney beans",
          "original": "1/2 cup of red kidney beans",
          "originalString": "1/2 cup of red kidney beans",
          "originalName": "red kidney beans",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "red"
          ],
          "metaInformation": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 118.294,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20444,
          "aisle": "Pasta and Rice",
          "image": "uncooked-white-rice.png",
          "consistency": "solid",
          "name": "rice",
          "original": "1 cup of Rice",
          "originalString": "1 cup of Rice",
          "originalName": "Rice",
          "amount": 1.0,
          "unit": "cup",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10011819,
          "aisle": "Produce;Ethnic Foods",
          "image": "scotch-bonnet-chile.jpg",
          "consistency": "solid",
          "name": "scotch bonnet chili peppers",
          "original": "3 scotch bonnet peppers",
          "originalString": "3 scotch bonnet peppers",
          "originalName": "scotch bonnet peppers",
          "amount": 3.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        }
      ],
      "id": 716364,
      "title": "Rice and Peas with Coconut Curry Mackerel",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.afrolems.com/2014/10/31/rice-and-peas-with-coconut-curry-mackerel/",
      "image": "https://spoonacular.com/recipeImages/716364-556x370.jpg",
      "imageType": "jpg",
      "summary": "Rice and Peas with Coconut Curry Mackerel might be just the <b>Indian</b> recipe you are searching for. One serving contains <b>624 calories</b>, <b>31g of protein</b>, and <b>34g of fat</b>. This gluten free, dairy free, and pescatarian recipe serves 4 and costs <b>$2.42 per serving</b>. This recipe from Afrolems has 26 fans. It works well as a budget friendly main course. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. If you have seasoning cubes, mackerel, curry powder, and a few other ingredients on hand, you can make it. To use up the curry powder you could follow this main course with the <a href=\"https://spoonacular.com/recipes/curry-ice-cream-with-mango-and-pistachio-539368\">Curry Ice Cream with Mango and Pistachio</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/coconut-chicken-curry-with-snow-peas-and-rice-157311\">Coconut Chicken Curry with Snow Peas and Rice</a>, <a href=\"https://spoonacular.com/recipes/black-eyed-peas-curry-with-coconut-lobia-curry-600742\">Black Eyed Peas Curry (With Coconut) (Lobia Curry)</a>, and <a href=\"https://spoonacular.com/recipes/skillet-chicken-with-snap-peas-mushrooms-and-coconut-curry-202063\">Skillet Chicken with Snap Peas, Mushrooms, and Coconut Curry</a>.",
      "cuisines": [
        "Indian",
        "Asian"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "pescatarian"
      ],
      "occasions": [

      ],
      "winePairing": {
        "pairedWines": [
          "chenin blanc",
          "gewurztraminer",
          "riesling"
        ],
        "pairingText": "Asian works really well with Chenin Blanc, Gewurztraminer, and Riesling. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. The Dry Creek Vineyard Dry Chenin Blanc, Wine with a 5 out of 5 star rating seems like a good match. It costs about 15 dollars per bottle.",
        "productMatches": [
          {
            "id": 430261,
            "title": "Dry Creek Vineyard Dry Chenin Blanc, Wine",
            "description": "This beautiful wine is wonderfully consistent vintage after vintage. We receive superior Chenin Blanc fruit from the Wilson Ranch in Clarksburg, allowing us to produce an expressive, nuanced and delicious wine. At first swirl, aromatics of white pear, pineapple and banana spring forward from the glass. On the palate, the wine is refreshing with flavors of ripe tangerine and peaches. The mouthfeel is lively, but rich and has a subtle creaminess. 100% stainless steel fermentation guarantees the fresh fruit character fans of this wine have come to appreciate over the years. This is the quintessential summer sipper and the perfect wine to pair with fresh oysters!",
            "price": "$15.0",
            "imageUrl": "https://spoonacular.com/productImages/430261-312x231.jpg",
            "averageRating": 1.0,
            "ratingCount": 2.0,
            "score": 0.8571428571428572,
            "link": "https://www.amazon.com/Dry-Creek-Vineyard-Chenin-Clarksburg/dp/B01N30XOBY?tag=spoonacular-20"
          }
        ]
      },
      "instructions": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.Serve with the rice and peas",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "seasoning cube",
                  "localizedName": "seasoning cube",
                  "image": "stock-cube.jpg"
                },
                {
                  "id": 12118,
                  "name": "coconut milk",
                  "localizedName": "coconut milk",
                  "image": "coconut-milk.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "stock-pot.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.",
              "ingredients": [
                {
                  "id": 12118,
                  "name": "coconut milk",
                  "localizedName": "coconut milk",
                  "image": "coconut-milk.png"
                },
                {
                  "id": 2015,
                  "name": "curry powder",
                  "localizedName": "curry powder",
                  "image": "curry-powder.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 15050,
                  "name": "mackerel",
                  "localizedName": "mackerel",
                  "image": "mackerel-fresh.jpg"
                },
                {
                  "id": 10111333,
                  "name": "peppers",
                  "localizedName": "peppers",
                  "image": "green-pepper.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 10014052,
                  "name": "scotch whiskey",
                  "localizedName": "scotch whiskey",
                  "image": "whiskey-bottle.jpg"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 10115261,
                  "name": "fish",
                  "localizedName": "fish",
                  "image": "fish-fillet.jpg"
                },
                {
                  "id": 11304,
                  "name": "peas",
                  "localizedName": "peas",
                  "image": "peas.jpg"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "stock-pot.jpg"
                }
              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Serve with the rice and peas",
              "ingredients": [
                {
                  "id": 11304,
                  "name": "peas",
                  "localizedName": "peas",
                  "image": "peas.jpg"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/rice-and-peas-with-coconut-curry-mackerel-716364"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 10,
      "spoonacularScore": 41.0,
      "healthScore": 6.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 109.99,
      "extendedIngredients": [
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "solid",
          "name": "eggs",
          "original": "8 eggs, only egg yolks",
          "originalString": "8 eggs, only egg yolks",
          "originalName": "eggs, only egg yolks",
          "amount": 8.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 8.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 8.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "fluid-cream.jpg",
          "consistency": "liquid",
          "name": "heavy cream",
          "original": "1 cup heavy cream",
          "originalString": "1 cup heavy cream",
          "originalName": "heavy cream",
          "amount": 1.0,
          "unit": "cup",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9266,
          "aisle": "Produce",
          "image": "pineapple.jpg",
          "consistency": "solid",
          "name": "pineapple",
          "original": "3 cups of pineapple (or other fruit), cleaned and cut into small pieces",
          "originalString": "3 cups of pineapple (or other fruit), cleaned and cut into small pieces",
          "originalName": "pineapple (or other fruit), cleaned and cut into small pieces",
          "amount": 3.0,
          "unit": "cups",
          "meta": [
            "cleaned",
            "cut into small pieces",
            "(or other fruit)"
          ],
          "metaInformation": [
            "cleaned",
            "cut into small pieces",
            "(or other fruit)"
          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 709.764,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1090,
          "aisle": "Baking",
          "image": "milk-powdered.jpg",
          "consistency": "solid",
          "name": "powdered milk",
          "original": "¼ cup powdered milk",
          "originalString": "¼ cup powdered milk",
          "originalName": "powdered milk",
          "amount": 0.25,
          "unit": "cup",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "solid",
          "name": "sugar",
          "original": "1 cup sugar",
          "originalString": "1 cup sugar",
          "originalName": "sugar",
          "amount": 1.0,
          "unit": "cup",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "original": "1 tsp vanilla extract",
          "originalString": "1 tsp vanilla extract",
          "originalName": "vanilla extract",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "liquid",
          "name": "whole milk",
          "original": "2 cups whole milk",
          "originalString": "2 cups whole milk",
          "originalName": "whole milk",
          "amount": 2.0,
          "unit": "cups",
          "meta": [
            "whole"
          ],
          "metaInformation": [
            "whole"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "id": 647068,
      "title": "Homemade pineapple ice cream",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "http://www.foodista.com/recipe/4MN7KFYB/homemade-pineapple-ice-cream",
      "image": "https://spoonacular.com/recipeImages/647068-556x370.jpg",
      "imageType": "jpg",
      "summary": "Homemade pineapple ice cream is a <b>gluten free and vegetarian</b> dessert. For <b>$1.1 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One serving contains <b>469 calories</b>, <b>13g of protein</b>, and <b>24g of fat</b>. It can be enjoyed any time, but it is especially good for <b>Summer</b>. 9 people have tried and liked this recipe. If you have eggs, milk, vanillan extract, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 45%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/homemade-drumsticks-ice-cream-913535\">Homemade Drumsticks Ice Cream</a>, <a href=\"https://spoonacular.com/recipes/homemade-ice-cream-crunch-cake-912064\">Homemade Ice Cream Crunch Cake</a>, and <a href=\"https://spoonacular.com/recipes/homemade-fresh-pineapple-ice-cream-488356\">Homemade fresh Pineapple Ice cream</a> for similar recipes.",
      "cuisines": [

      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [
        "summer"
      ],
      "winePairing": {

      },
      "instructions": "<ol><li>In a large pot mix the milk, sugar and powdered milk. Bring the mix to a low simmer over medium heat and stir to dissolve the sugar, then turn the heat down and just keep it warm.</li><li>Put the egg yolks in a medium bowl and whisk for 2 minutes until they are thickened.</li><li>While constantly whisking, slowly add 1 cup of the hot milk mixture and whisk until it is blended. Then pour the egg mixture back into the pot of hot milk and increase heat to medium. Stir the mixture constantly with a wooden or plastic spoon, until the mixture is thickened (like gravy).</li><li>Stir in whipping cream and vanilla. Cover and put into the refrigerator for at least 6 hours (or overnight) before making the ice cream in the ice cream maker.</li><li>Blend fruit in a food processor or blender to a puree consistency.</li><li>Stir the pureed fruit into the milk and egg mixture. Mix thoroughly.</li><li>Pour the mixture into an ice cream machine and churn until frozen, 15-20 minutes, according to the manufacturers instructions.</li><li>Transfer to plastic container and place in the freezer for an hour before serving.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large pot mix the milk, sugar and powdered milk. Bring the mix to a low simmer over medium heat and stir to dissolve the sugar, then turn the heat down and just keep it warm.",
              "ingredients": [
                {
                  "id": 1090,
                  "name": "powdered milk",
                  "localizedName": "powdered milk",
                  "image": "milk-powdered.jpg"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "stock-pot.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Put the egg yolks in a medium bowl and whisk for 2 minutes until they are thickened.While constantly whisking, slowly add 1 cup of the hot milk mixture and whisk until it is blended. Then pour the egg mixture back into the pot of hot milk and increase heat to medium. Stir the mixture constantly with a wooden or plastic spoon, until the mixture is thickened (like gravy).Stir in whipping cream and vanilla. Cover and put into the refrigerator for at least 6 hours (or overnight) before making the ice cream in the ice cream maker.Blend fruit in a food processor or blender to a puree consistency.Stir the pureed fruit into the milk and egg mixture.",
              "ingredients": [
                {
                  "id": 1001053,
                  "name": "whipping cream",
                  "localizedName": "whipping cream",
                  "image": "fluid-cream.jpg"
                },
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "localizedName": "egg yolk",
                  "image": "egg-yolk.jpg"
                },
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "vanilla-ice-cream.png"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 9431,
                  "name": "fruit",
                  "localizedName": "fruit",
                  "image": "mixed-fresh-fruit.jpg"
                },
                {
                  "id": 6997,
                  "name": "gravy",
                  "localizedName": "gravy",
                  "image": "gravy.jpg"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404791,
                  "name": "ice cream machine",
                  "localizedName": "ice cream machine",
                  "image": "ice-cream-machine.jpg"
                },
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                },
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "blender.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                },
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "stock-pot.jpg"
                }
              ],
              "length": {
                "number": 362,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Mix thoroughly.",
              "ingredients": [

              ],
              "equipment": [

              ]
            },
            {
              "number": 4,
              "step": "Pour the mixture into an ice cream machine and churn until frozen, 15-20 minutes, according to the manufacturers instructions.",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "vanilla-ice-cream.png"
                }
              ],
              "equipment": [
                {
                  "id": 404791,
                  "name": "ice cream machine",
                  "localizedName": "ice cream machine",
                  "image": "ice-cream-machine.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Transfer to plastic container and place in the freezer for an hour before serving.",
              "ingredients": [

              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/homemade-pineapple-ice-cream-647068"
    },
    {
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "lowFodmap": true,
      "aggregateLikes": 20,
      "spoonacularScore": 46.0,
      "healthScore": 6.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 43.63,
      "extendedIngredients": [
        {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "solid",
          "name": "almonds",
          "original": "2 cup raw almonds",
          "originalString": "2 cup raw almonds",
          "originalName": "raw almonds",
          "amount": 2.0,
          "unit": "cup",
          "meta": [
            "raw"
          ],
          "metaInformation": [
            "raw"
          ],
          "measures": {
            "us": {
              "amount": 2.0,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 473.176,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 19911,
          "aisle": "Cereal",
          "image": "maple-syrup.png",
          "consistency": "liquid",
          "name": "maple syrup",
          "original": "1 tbsp maple syrup",
          "originalString": "1 tbsp maple syrup",
          "originalName": "maple syrup",
          "amount": 1.0,
          "unit": "tbsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "solid",
          "name": "ground cinnamon",
          "original": "1 tsp ground cinnamon",
          "originalString": "1 tsp ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "original": "1 1/2 tsp pure vanilla extract",
          "originalString": "1 1/2 tsp pure vanilla extract",
          "originalName": "pure vanilla extract",
          "amount": 1.5,
          "unit": "tsp",
          "meta": [
            "pure"
          ],
          "metaInformation": [
            "pure"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19904,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "solid",
          "name": "dark chocolate",
          "original": "1 oz dark chocolate",
          "originalString": "1 oz dark chocolate",
          "originalName": "dark chocolate",
          "amount": 1.0,
          "unit": "oz",
          "meta": [
            "dark"
          ],
          "metaInformation": [
            "dark"
          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "oz",
              "unitLong": "ounce"
            },
            "metric": {
              "amount": 28.35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "id": 632155,
      "title": "Almond Nut Butter",
      "readyInMinutes": 45,
      "servings": 16,
      "sourceUrl": "https://www.foodista.com/recipe/LQJQ8PPH/almond-nut-butter",
      "image": "https://spoonacular.com/recipeImages/632155-556x370.jpg",
      "imageType": "jpg",
      "summary": "Almond Nut Butter is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 16 servings. One serving contains <b>118 calories</b>, <b>4g of protein</b>, and <b>10g of fat</b>. For <b>44 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 20 people have made this recipe and would make it again. Head to the store and pick up almonds, maple syrup, vanillan extract, and a few other things to make it today. A couple people really liked this condiment. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 46%</b>, which is solid. <a href=\"https://spoonacular.com/recipes/cocoa-nut-almond-butter-spread-585799\">Cocoa-Nut Almond Butter Spread</a>, <a href=\"https://spoonacular.com/recipes/baru-nut-butter-chocolate-baru-nut-butter-cups-gluten-free-paleo-+-vegan-1017637\">Baru Nut Butter & Chocolate Baru Nut Butter Cups (Gluten Free, Paleo + Vegan)</a>, and <a href=\"https://spoonacular.com/recipes/nut-free-chocolate-cookies-with-soy-nut-butter-596158\">Nut-Free Chocolate Cookies with Soy Nut Butter</a> are very similar to this recipe.",
      "cuisines": [

      ],
      "dishTypes": [
        "condiment",
        "dip",
        "spread"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "fodmap friendly",
        "vegan"
      ],
      "occasions": [

      ],
      "winePairing": {
        "pairedWines": [

        ],
        "pairingText": "",
        "productMatches": [

        ]
      },
      "instructions": "Preheat oven to 300 degrees and line a baking sheet with parchment paper.\nIn a large bowl, mix together the almonds and maple syrup . Spread out almond mixture onto baking sheet and bake for 15 minutes, stir and place back in oven for another 15 minutes.\nRemove from oven and allow the almonds to cool.\nIn food processor add almonds and process until you see it form into a ball.  (NOTE:  You will have to scrape down the sides a few times, like 10.)  Add you cinnamon and vanilla extract and then process until drippy.  The whole process takes about 10  15 minutes.   When your right at the end I add the chocolate and process until all melted in, about 1 more minute.\nMakes about 16 Tablespoons or a smidge over 1 cup\nCalories per Tablespoon:  92,  Fat:  7.4,  Sodium:  30,  Potassium:  3.3,  Carbs:  4.7,  Fiber:  1.7,  Sugar:  1.8,  Protein:  3.1",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 300 degrees and line a baking sheet with parchment paper.",
              "ingredients": [

              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "baking-paper.jpg"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "In a large bowl, mix together the almonds and maple syrup .",
              "ingredients": [
                {
                  "id": 19911,
                  "name": "maple syrup",
                  "localizedName": "maple syrup",
                  "image": "maple-syrup.png"
                },
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Spread out almond mixture onto baking sheet and bake for 15 minutes, stir and place back in oven for another 15 minutes.",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "baking-sheet.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Remove from oven and allow the almonds to cool.",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "In food processor add almonds and process until you see it form into a ball.  (NOTE:  You will have to scrape down the sides a few times, like 10.)",
              "ingredients": [
                {
                  "id": 12061,
                  "name": "almonds",
                  "localizedName": "almonds",
                  "image": "almonds.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Add you cinnamon and vanilla extract and then process until drippy.  The whole process takes about 10  15 minutes.   When your right at the end I add the chocolate and process until all melted in, about 1 more minute.",
              "ingredients": [
                {
                  "id": 2050,
                  "name": "vanilla extract",
                  "localizedName": "vanilla extract",
                  "image": "vanilla-extract.jpg"
                },
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "cinnamon.jpg"
                }
              ],
              "equipment": [

              ],
              "length": {
                "number": 16,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Makes about 16 Tablespoons or a smidge over 1 cup",
              "ingredients": [

              ],
              "equipment": [

              ]
            },
            {
              "number": 8,
              "step": "Calories per Tablespoon:  92,  Fat:  7.4,  Sodium:  30,  Potassium:  3.3,  Carbs:  4.7,  Fiber:  1.7,  Sugar:  1.8,  Protein:  3.1",
              "ingredients": [
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                }
              ],
              "equipment": [

              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/almond-nut-butter-632155"
    },
    {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 7,
      "gaps": "no",
      "lowFodmap": false,
      "aggregateLikes": 21,
      "spoonacularScore": 26.0,
      "healthScore": 2.0,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 62.08,
      "extendedIngredients": [
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "solid",
          "name": "cream cheese",
          "original": "250g Cream cheese",
          "originalString": "250g Cream cheese",
          "originalName": "Cream cheese",
          "amount": 250.0,
          "unit": "g",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1124,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-white.jpg",
          "consistency": "solid",
          "name": "egg whites",
          "original": "5 Egg whites",
          "originalString": "5 Egg whites",
          "originalName": "Egg whites",
          "amount": 5.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1125,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg-yolk.jpg",
          "consistency": "solid",
          "name": "egg yolks",
          "original": "5 Egg yolks",
          "originalString": "5 Egg yolks",
          "originalName": "Egg yolks",
          "amount": 5.0,
          "unit": "",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 5.0,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "original": "3 tbsp Lemon juice",
          "originalString": "3 tbsp Lemon juice",
          "originalName": "Lemon juice",
          "amount": 3.0,
          "unit": "tbsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3.0,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "liquid",
          "name": "milk",
          "original": "120ml Soya milk (unsweetened)",
          "originalString": "120ml Soya milk (unsweetened)",
          "originalName": "Soya milk (unsweetened)",
          "amount": 120.0,
          "unit": "ml",
          "meta": [
            "unsweetened",
            "()"
          ],
          "metaInformation": [
            "unsweetened",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 4.058,
              "unitShort": "fl. oz",
              "unitLong": "fl. ozs"
            },
            "metric": {
              "amount": 120.0,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "solid",
          "name": "plain flour",
          "original": "70g Plain flour (sifted)",
          "originalString": "70g Plain flour (sifted)",
          "originalName": "Plain flour (sifted)",
          "amount": 70.0,
          "unit": "g",
          "meta": [
            "plain",
            "sifted",
            "()"
          ],
          "metaInformation": [
            "plain",
            "sifted",
            "()"
          ],
          "measures": {
            "us": {
              "amount": 2.469,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 70.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 16161,
          "aisle": "Refrigerated;Produce;Ethnic Foods",
          "image": "tofu.png",
          "consistency": "solid",
          "name": "silken tofu",
          "original": "250g Silken tofu (tube form)",
          "originalString": "250g Silken tofu (tube form)",
          "originalName": "Silken tofu (tube form)",
          "amount": 250.0,
          "unit": "g",
          "meta": [
            "(tube form)"
          ],
          "metaInformation": [
            "(tube form)"
          ],
          "measures": {
            "us": {
              "amount": 8.818,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 250.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "solid",
          "name": "sugar",
          "original": "130g Caster sugar",
          "originalString": "130g Caster sugar",
          "originalName": "Caster sugar",
          "amount": 130.0,
          "unit": "g",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 4.586,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 130.0,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "liquid",
          "name": "vanilla extract",
          "original": "1 tsp Vanilla extract",
          "originalString": "1 tsp Vanilla extract",
          "originalName": "Vanilla extract",
          "amount": 1.0,
          "unit": "tsp",
          "meta": [

          ],
          "metaInformation": [

          ],
          "measures": {
            "us": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1.0,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "id": 633851,
      "title": "Baked Tofu Cheesecake",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "http://www.foodista.com/recipe/Q53P2JNF/baked-tofu-cheesecake",
      "image": "https://spoonacular.com/recipeImages/633851-556x370.jpg",
      "imageType": "jpg",
      "summary": "For <b>62 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe makes 12 servings with <b>184 calories</b>, <b>6g of protein</b>, and <b>10g of fat</b> each. 21 person have tried and liked this recipe. A mixture of flour, egg whites, egg yolks, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 29%</b>. This score is not so super. Try <a href=\"https://spoonacular.com/recipes/baked-italian-herb-tofu-+-how-to-press-tofu-like-a-champ-495103\">Baked Italian Herb Tofu + How to Press Tofu Like a Champ</a>, <a href=\"https://spoonacular.com/recipes/tofu-cheesecake-131272\">Tofu Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/tofu-and-banana-cheesecake-757683\">Tofu and Banana Cheesecake</a> for similar recipes.",
      "cuisines": [

      ],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [

      ],
      "winePairing": {
        "pairedWines": [

        ],
        "pairingText": "",
        "productMatches": [

        ]
      },
      "instructions": "<ol><li>Preheat oven to 170C. Line a 9\" cake tin and wrap with heavy duty aluminium foil to prevent any water from sipping into the cheesecake during baking.</li><li>In a food processor, blend all (A) ingredients until smooth. Put mixture in a large bowl.</li><li>In a separate mixing bowl, beat egg white and caster sugar until semi-firm peaks form to make soft meringue.</li><li>Use a whisk to mix 1/3 soft meringue with mixture.</li><li>Gently fold in the rest with spatula.</li><li>Pour mixture into cake tin and steam bake for about 50 mins at the lower rack of the oven.</li><li>Move the cheesecake to upper rack of the oven and switch temperature to grill for about 30 seconds to one minute to get a nice golden colour on top of the cake.</li><li>Leave cheesecake to cool in room temperature, remove and best to chill before serve.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 170C. Line a 9\" cake tin and wrap with heavy duty aluminium foil to prevent any water from sipping into the cheesecake during baking.In a food processor, blend all (A) ingredients until smooth. Put mixture in a large bowl.In a separate mixing bowl, beat egg white and caster sugar until semi-firm peaks form to make soft meringue.Use a whisk to mix 1/3 soft meringue with mixture.Gently fold in the rest with spatula.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "caster sugar",
                  "localizedName": "caster sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 1124,
                  "name": "egg whites",
                  "localizedName": "egg whites",
                  "image": "egg-white.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 10018364,
                  "name": "wrap",
                  "localizedName": "wrap",
                  "image": "flour-tortilla.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "aluminum-foil.png"
                },
                {
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                },
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "mixing-bowl.jpg"
                },
                {
                  "id": 404747,
                  "name": "cake form",
                  "localizedName": "cake form",
                  "image": "cake-pan.png"
                },
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "spatula-or-turner.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "whisk.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg",
                  "temperature": {
                    "number": 170.0,
                    "unit": "Celsius"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Pour mixture into cake tin and steam bake for about 50 mins at the lower rack of the oven.Move the cheesecake to upper rack of the oven and switch temperature to grill for about 30 seconds to one minute to get a nice golden colour on top of the cake.Leave cheesecake to cool in room temperature, remove and best to chill before serve.",
              "ingredients": [

              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "oven.jpg"
                },
                {
                  "id": 404747,
                  "name": "cake form",
                  "localizedName": "cake form",
                  "image": "cake-pan.png"
                },
                {
                  "id": 404706,
                  "name": "grill",
                  "localizedName": "grill",
                  "image": "grill.jpg"
                }
              ],
              "length": {
                "number": 51,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularSourceUrl": "https://spoonacular.com/baked-tofu-cheesecake-633851"
    }
  ],
    apiKey: "&apiKey=4e032f0a00ae4ac4a43167135bdca9b4",
    recipeID: "711310"

    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.currentView = this.currentView.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onReceiveRecipeClick = this.onReceiveRecipeClick.bind(this);
  }

  handleViewChange(event){
    console.log(event);
    this.setState({view: event});
  }

  onReceiveRecipeClick(recipeID){
    this.setState({recipeID: recipeID})
  }

  onSearchSubmit(searchUrl){
    console.log(this.state.apiKey);
    const url = searchUrl + this.state.apiKey;
    fetch(url)
    .then(res => res.json())
    .then(recipes => this.setState({recipeList: recipes.results}))
    .catch(error => console.error)
  }



  currentView(){


    if (this.state.view === "dietary" || this.state.view === "shopping" || this.state.view === "search"){
      return(
        <ListContainer search={this.onSearchSubmit} view={this.state.view} />
      )
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/users')
    .then(res => res.json())
    .then(user => this.setState({currentUser: user[0]}))
    .catch(error => console.error)
  }





  //   if (this.state.view[0] === "search"){
  //     return(
  //       <SearchContainer view={this.state.view}/>
  //     )
  //   }
  //   return null;
  // }

  //Add in the RecipeContainer to the switch again
  render(){





    return(
      <div>
      <NavBar handleViewChange={this.handleViewChange}/>
      {this.currentView()}
        <div className="main-container">

          <tr>
            <td id="list-of-recipes">
              <ListOfRecipes recipes={this.state.recipeList} onReceiveRecipeClick={this.onReceiveRecipeClick}/>
            </td>

          <td id="recipe-container">
            <RecipeContainer recipeID={this.state.recipeID} view={this.state.view}/>
            </td>
          </tr>
        </div>
      </div>
    )

  }
}



export default MainContainer;
