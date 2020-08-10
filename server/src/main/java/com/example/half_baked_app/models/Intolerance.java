package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
@Entity
@Table(name="intolerances")
public class Intolerance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JsonIgnoreProperties({"intolerances"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    //CONSTRUCTORS

    public Intolerance(String name, User user){
        this.name = name;
        this.user = user;
    }

    public Intolerance(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

