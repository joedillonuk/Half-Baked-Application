package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long recipeID;
    private String name;

    @JsonIgnoreProperties({"recipes"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    //CONSTRUCTORS

    public Recipe(Long recipeID, String name, User user){
        this.recipeID = recipeID;
        this.name = name;
        this.user = user;
    }

    public Recipe(){}

    //SETTERS AND GETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRecipeID() {
        return recipeID;
    }

    public void setRecipeID(Long recipeID) {
        this.recipeID = recipeID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
