package com.example.half_baked_app.controllers;

import com.example.half_baked_app.models.ShoppingListItem;
import com.example.half_baked_app.models.User;
import com.example.half_baked_app.repository.ShoppingListItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ShoppingListItemController {
    @Autowired
    ShoppingListItemRepository shoppingListItemRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/shopping_list")
    public ResponseEntity<List<ShoppingListItem>> getAllShoppingListItems() {
        return new ResponseEntity<>(shoppingListItemRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/shopping_list/{id}")
    public ResponseEntity getShoppingListItem(@PathVariable Long id) {
        return new ResponseEntity<>(shoppingListItemRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/shopping_list")
    public ResponseEntity<ShoppingListItem> postShoppingListItem(@RequestBody ShoppingListItem shoppingListItem) {
        shoppingListItemRepository.save(shoppingListItem);
        return new ResponseEntity<>(shoppingListItem, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/shopping_list/{id}")
    public ResponseEntity<ShoppingListItem> deleteShoppingListItem(@PathVariable Long id) {
        ShoppingListItem found = shoppingListItemRepository.getOne(id);
        shoppingListItemRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @CrossOrigin
    @PatchMapping(value = "/shopping_list/{id}")
    public ResponseEntity<ShoppingListItem> updateShoppingListItem(@RequestBody ShoppingListItem shoppingListItem) {
        shoppingListItemRepository.save(shoppingListItem);
        return new ResponseEntity<>(shoppingListItem, HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping(value = "/shopping_list_item/{id}")
    public ResponseEntity<ShoppingListItem> updatedShoppingListItem(@PathVariable Long id, @RequestBody ShoppingListItem shoppingListItem) {
        ShoppingListItem updatedShoppingListItem = shoppingListItemRepository.getOne(id);
        updatedShoppingListItem.setName(shoppingListItem.getName());
        updatedShoppingListItem.setImgUrl(shoppingListItem.getImgUrl());
        updatedShoppingListItem.setUser(shoppingListItem.getUser());
        shoppingListItemRepository.save(updatedShoppingListItem);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
