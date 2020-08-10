package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
 @Entity
 @Table(name="dietaryNeeds")
 public class DietaryNeed {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String name;

        @JsonIgnoreProperties({"dietaryNeeds"})
        @ManyToOne
        @JoinColumn(name = "user_id", nullable = false)
        private User user;

        //CONSTRUCTORS

        public DietaryNeed(String name, User user){
            this.name = name;
            this.user = user;
        }

        public DietaryNeed(){
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

