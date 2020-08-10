package com.example.half_baked_app.controllers;

import com.example.half_baked_app.models.DietaryNeed;
import com.example.half_baked_app.models.Recipe;
import com.example.half_baked_app.repository.DietaryNeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class DietaryNeedsController {
    @Autowired
    DietaryNeedRepository dietaryNeedRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/dietaryNeeds")
    public ResponseEntity<List<DietaryNeed>> getAllDietaryNeeds() {
        return new ResponseEntity<>(dietaryNeedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/dietaryNeeds/{id}")
    public ResponseEntity getDietaryNeed(@PathVariable Long id) {
        return new ResponseEntity<>(dietaryNeedRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/dietaryNeeds")
    public ResponseEntity<DietaryNeed> postDietaryNeed(@RequestBody DietaryNeed dietaryNeed) {
        dietaryNeedRepository.save(dietaryNeed);
        return new ResponseEntity<>(dietaryNeed, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/dietaryNeeds/{id}")
    public ResponseEntity<DietaryNeed> deleteDietaryNeed(@PathVariable Long id) {
        DietaryNeed found = dietaryNeedRepository.getOne(id);
        dietaryNeedRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value = "/dietaryNeeds/{id}")
    public ResponseEntity<DietaryNeed> updateDietaryNeed(@RequestBody DietaryNeed dietaryNeed) {
        dietaryNeedRepository.save(dietaryNeed);
        return new ResponseEntity<>(dietaryNeed, HttpStatus.OK);
    }
}
