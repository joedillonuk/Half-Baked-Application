package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@Entity
@Table(name="recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "recipeID")
    private Long recipeID;

    @Column(name = "name")
    private String name;

    @Column(name = "blacklist")
    private Boolean blacklist;

    @JsonIgnoreProperties({"recipes"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    //CONSTRUCTORS

    public Recipe(Long recipeID, String name, User user, Boolean blacklist){
        this.recipeID = recipeID;
        this.name = name;
        this.user = user;
        this.blacklist = blacklist;
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

    public Boolean getBlacklist() {
        return blacklist;
    }

    public void setBlacklist(Boolean blacklist) {
        this.blacklist = blacklist;
    }
}
