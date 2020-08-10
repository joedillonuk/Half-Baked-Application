package com.example.half_baked_app.controllers;

import com.example.half_baked_app.models.Intolerance;
import com.example.half_baked_app.repository.IntoleranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class IntoleranceController {
    @Autowired
    IntoleranceRepository intoleranceRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/intolerances")
    public ResponseEntity<List<Intolerance>> getAllIntolerances() {
        return new ResponseEntity<>(intoleranceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/intolerances/{id}")
    public ResponseEntity getIntolerance(@PathVariable Long id) {
        return new ResponseEntity<>(intoleranceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/intolerances")
    public ResponseEntity<Intolerance> postIntolerance(@RequestBody Intolerance intolerance) {
        intoleranceRepository.save(intolerance);
        return new ResponseEntity<>(intolerance, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/intolerances/{id}")
    public ResponseEntity<Intolerance> deleteIntolerance(@PathVariable Long id) {
        Intolerance found = intoleranceRepository.getOne(id);
        intoleranceRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value = "/intolerances/{id}")
    public ResponseEntity<Intolerance> updateIntolerance(@RequestBody Intolerance intolerance) {
        intoleranceRepository.save(intolerance);
        return new ResponseEntity<>(intolerance, HttpStatus.OK);
    }
}
