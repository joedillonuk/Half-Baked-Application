

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

    @Column(name = "dietary_needs")
    private ArrayList<String> dietaryNeeds;

    @Column(name = "intolerences")
    private ArrayList<String> intolerences;

    @Column(name= "shopping_list")
    private ArrayList<String> shoppingList;

    @JsonBackReference
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Recipe> savedRecipes;

    //CONSTRUCTOR

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dietaryNeeds = new ArrayList<String>();
        this.intolerences = new ArrayList<String>();
        this.shoppingList = new ArrayList<String>();
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

    public List<String> getAllDietaryNeeds() {
        return dietaryNeeds;
    }

    public void addDietaryNeeds(String diet) {
        this.dietaryNeeds.add(diet);
    }

    public void removeDietaryNeeds(String diet){
        this.dietaryNeeds.remove(diet);
    }

    public ArrayList<String> getintolerences() {
        return intolerences;
    }

    public void addintolerences(String allergy) {
        this.intolerences.add(allergy);
    }

   public void removeintolerences(String allergy) {
        this.intolerences.remove(allergy);
    }

    public ArrayList<String> getShoppingList() {
        return shoppingList;
    }

    public void addToShoppingList(String item) {
        this.shoppingList.add(item);
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
