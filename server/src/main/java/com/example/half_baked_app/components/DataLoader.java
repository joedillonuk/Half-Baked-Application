package com.example.half_baked_app.components;

import com.example.half_baked_app.models.*;
import com.example.half_baked_app.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    DietaryNeedRepository dietaryNeedRepository;

    @Autowired
    IntoleranceRepository intoleranceRepository;

    @Autowired
    ShoppingListItemRepository shoppingListItemRepository;

    public DataLoader(){

    }


    @Override
    public void run(ApplicationArguments args){

        User user1 = new User("John", "Smith", 32, "male", 84);
        userRepository.save(user1);

        DietaryNeed dietaryNeed1 = new DietaryNeed("Vegan", user1);
        dietaryNeedRepository.save(dietaryNeed1);

        Intolerance intolerance1 = new Intolerance("Peanut", user1);
        intoleranceRepository.save(intolerance1);

        Intolerance intolerance2 = new Intolerance("Shellfish", user1);
        intoleranceRepository.save(intolerance2);

        ShoppingListItem shoppingListItem1 = new ShoppingListItem("Bread", user1);
        shoppingListItemRepository.save(shoppingListItem1);

        ShoppingListItem shoppingListItem2 = new ShoppingListItem("Avocado", user1);
        shoppingListItemRepository.save(shoppingListItem2);

        ShoppingListItem shoppingListItem3 = new ShoppingListItem("Vegan Cheese", user1);
        shoppingListItemRepository.save(shoppingListItem3);


        Recipe recipe1 = new Recipe(1L, "Taste Test Blacklist", user1, true);
        recipeRepository.save(recipe1);

        Recipe recipe2 = new Recipe(2L, "Taste Test Saved Recipe", user1, false);
        recipeRepository.save(recipe1);

        user1.addToSavedRecipes(recipe1);
        user1.addToSavedRecipes(recipe2);
        user1.addDietaryNeeds(dietaryNeed1);
        user1.addIntolerances(intolerance1);
        user1.addIntolerances(intolerance2);
        user1.addToShoppingList(shoppingListItem1);
        user1.addToShoppingList(shoppingListItem2);
        user1.addToShoppingList(shoppingListItem2);
        userRepository.save(user1);


    }
}
