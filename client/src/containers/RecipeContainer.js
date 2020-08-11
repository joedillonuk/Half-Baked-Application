//HANDLES SAVED RECIPES, RECIPE SEARCH RESULTS

import React, {Component, Fragment} from 'react';

import ListOfRecipes from '../components/recipe/ListOfRecipes.js';
import RecipeInstructions from '../components/recipe/RecipeInstructions.js';
import IngredientList from '../components/recipe/IngredientList.js';

class RecipeContainer extends Component{
  constructor(props){
    super(props);

    this.state={

      selectedRecipe: {
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
      recipeID: 711310
    }
    this.render = this.render.bind(this)
  }



// render(){
//   let url = `https://api.spoonacular.com/recipes/${this.state.recipeID}/information?apiKey=204344e0b67248caad507656026e4ace`
//   fetch(url)
//   .then(res => res.json())
//   .then(recipe => this.setState({selectedRecipe: recipe}))
//   .catch(error => console.error)
// }
//https://api.spoonacular.com/recipes/711310/information?apiKey=204344e0b67248caad507656026e4ace
  // LOGIC STARTS HERE

  // componentDidMount(){
  //
  //   console.log("recipe mounted is: " + this.props.selectedRecipe.title);

    // let url = `https://api.spoonacular.com/recipes/${this.props.recipeID}/information?apiKey=204344e0b67248caad507656026e4ace`
    // fetch(url)
    // .then(res => res.json())
    // .then(recipe => this.setState({selectedRecipe: recipe}))
    // .catch(error => console.error)

// };

// componentWillReceiveProps(props) {
//   console.log("confirm props received were:" + props.recipeID );
//   console.log(props.recipeID);
//
//   if(this.state.recipeID != props.recipeID){
//     console.log("ok the keys were different so I'm updating");
//   this.setState({recipeID: props.recipeID});
//   this.componentWillUpdate(props);
//
// }
//
// }

// componentWillUpdate(props){
//   console.log("running componentWillUpdate with props:" + props.recipeID);
//
//   let url = `https://api.spoonacular.com/recipes/${props.recipeID}/information?apiKey=204344e0b67248caad507656026e4ace`
//   fetch(url)
//   .then(res => res.json())
//   .then(recipe => this.setState({selectedRecipe: recipe}))
//   .catch(error => console.error)
// }

  //RENDER STARTS HERE
  render(){
    const {selectedRecipe} = this.state;

    if(!selectedRecipe){
      return <p>"Loading..."</p>
    }
    return(

      <div className="recipe-container">
        {/* Removing ListOfRecipes from RecipeContainer
            May move to MainContainer
          <ListOfRecipes/> */}
          <h2 id="header">{this.props.selectedRecipe.title} {this.props.selectedRecipe.id}</h2>
        <div className="row">
        <div className="column">
        <div className="recipe-container-image-and-directions">
        <img id="floated" src={this.props.selectedRecipe.image}/>
        <RecipeInstructions selectedRecipe={this.props.selectedRecipe} />

        <p>Add to favourites</p>
        <p>Blacklist Recipe</p>
        </div>
        </div>
        <div className="column">
        <IngredientList ingredients={this.props.selectedRecipe.extendedIngredients} />
        </div>
        </div>
    </div>
    )
  }
}


export default RecipeContainer;
