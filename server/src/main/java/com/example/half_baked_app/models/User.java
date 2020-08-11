

package com.example.half_baked_app.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "weight")
    private Integer weight;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<DietaryNeed> dietaryNeeds;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Intolerance> intolerances;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<ShoppingListItem> shoppingList;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Recipe> savedRecipes;

    //CONSTRUCTOR

    public User(String firstName, String lastName, Integer age, String gender, Integer weight) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.dietaryNeeds = new ArrayList<DietaryNeed>();
        this.intolerances = new ArrayList<Intolerance>();
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<DietaryNeed> getDietaryNeeds() {
        return dietaryNeeds;
    }

    public void setDietaryNeeds(List<DietaryNeed> dietaryNeeds) {
        this.dietaryNeeds = dietaryNeeds;
    }

    public void addDietaryNeeds(DietaryNeed dietaryNeed) {
        this.dietaryNeeds.add(dietaryNeed);
    }

    public void removeDietaryNeeds(DietaryNeed dietaryNeed){
        this.dietaryNeeds.remove(dietaryNeed);
    }

    public List<Intolerance> getIntolerances() {
        return intolerances;
    }

    public void setIntolerances(List<Intolerance> intolerances) {
        this.intolerances = intolerances;
    }

    public void addIntolerances(Intolerance intolerance) {
        this.intolerances.add(intolerance);
    }

   public void removeIntolerances(Intolerance intolerance) {
        this.intolerances.remove(intolerance);
    }

    public List<ShoppingListItem> getShoppingList() {
        return shoppingList;
    }

    public void setShoppingList(List<ShoppingListItem> shoppingList) {
        this.shoppingList = shoppingList;
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

    public void setSavedRecipes(List<Recipe> savedRecipes) {
        this.savedRecipes = savedRecipes;
    }

    public void addToSavedRecipes(Recipe recipe) {
        this.savedRecipes.add(recipe);
    }

}
