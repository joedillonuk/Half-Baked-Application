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
        userRepository.save(user1);

        Recipe recipe1 = new Recipe(1L, "Taste Test", user1);
        recipeRepository.save(recipe1);

        user1.addToSavedRecipes(recipe1);
        userRepository.save(user1);


    }
}
