package com.example.half_baked_app.components;

import com.example.half_baked_app.models.Recipe;
import com.example.half_baked_app.models.User;
import com.example.half_baked_app.repository.RecipeRepository;
import com.example.half_baked_app.repository.UserRepository;
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

    public DataLoader(){

    }


    @Override
    public void run(ApplicationArguments args){

        User user1 = new User("John", "Smith");
        user1.addintolerences("Peanut");
        user1.addintolerences("Shellfish");
        user1.addDietaryNeeds("Vegan");
        userRepository.save(user1);

        Recipe recipe1 = new Recipe(1L, "Taste Test Blacklist", user1, true);
        recipeRepository.save(recipe1);

        Recipe recipe2 = new Recipe(2L, "Taste Test Saved Recipe", user1, false);
        recipeRepository.save(recipe1);

        user1.addToSavedRecipes(recipe1);
        user1.addToSavedRecipes(recipe2);
        userRepository.save(user1);


    }
}
