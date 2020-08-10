

package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;


    @JsonIgnoreProperties({"users"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<DietaryNeed> dietaryNeeds;

    @JsonIgnoreProperties({"users"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Intolerance> intolerences;

    @JsonIgnoreProperties({"users"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<ShoppingListItem> shoppingList;

    @JsonIgnoreProperties({"users"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Recipe> savedRecipes;

    //CONSTRUCTOR

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dietaryNeeds = new ArrayList<DietaryNeed>();
        this.intolerences = new ArrayList<Intolerance>();
        this.shoppingList = new ArrayList<ShoppingListItem>();
        this.savedRecipes = new ArrayList<Recipe>();
    }

    public User(){

    }

    //GETTERS AND SETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<DietaryNeed> getAllDietaryNeeds() {
        return dietaryNeeds;
    }

    public void addDietaryNeeds(DietaryNeed dietaryNeed) {
        this.dietaryNeeds.add(dietaryNeed);
    }

    public void removeDietaryNeeds(DietaryNeed dietaryNeed){
        this.dietaryNeeds.remove(dietaryNeed);
    }

    public List<Intolerance> getIntolerences() {
        return intolerences;
    }

    public void addIntolerences(Intolerance intolerance) {
        this.intolerences.add(intolerance);
    }

   public void removeintolerences(Intolerance intolerance) {
        this.intolerences.remove(intolerance);
    }

    public List<ShoppingListItem> getShoppingList() {
        return shoppingList;
    }

    public void addToShoppingList(ShoppingListItem shoppingListItem) {
        this.shoppingList.add(shoppingListItem);
    }

    public void removeFromShoppingList(String item) {
        this.shoppingList.remove(item);
    }

    public List<Recipe> getSavedRecipes() {
        return savedRecipes;
    }

    public void addToSavedRecipes(Recipe recipe) {
        this.savedRecipes.add(recipe);
    }

}
