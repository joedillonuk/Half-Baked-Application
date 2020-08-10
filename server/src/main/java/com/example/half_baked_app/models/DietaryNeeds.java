package com.example.half_baked_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
 @Entity
 @Table(name="dietaryNeeds")
 public class DietaryNeeds {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private Long dietaryNeedsID;
        private String name;

        @JsonIgnoreProperties({"dietaryNeeds"})
        @ManyToOne
        @JoinColumn(name = "user_id", nullable = false)
        private User user;

        //CONSTRUCTORS

        public DietaryNeeds(Long dietaryNeedID, String name, User user){
            this.dietaryNeedsID = dietaryNeedsID;
            this.name = name;
            this.user = user;
        }

        public DietaryNeeds(){
        }
    }

