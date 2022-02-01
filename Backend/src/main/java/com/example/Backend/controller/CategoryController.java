package com.example.Backend.controller;

import com.example.Backend.models.exam.Category;

import com.example.Backend.service.CategoryService;
import com.example.Backend.service.impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    public CategoryService categoryService;

    @PostMapping("/")

    public ResponseEntity<Category> addCategory(@RequestBody Category category)
    {
      Category category1=this.categoryService.addCategory(category);
      return ResponseEntity.ok(category1);
    }

    //get category
    @GetMapping("/{categoryId}")
    public Category getCatgory(@PathVariable Long catagoryId )
    {

        return this.categoryService.getCategory(catagoryId);
    }

    //get all category
    @GetMapping("/")
    public ResponseEntity<?> getCategories()
    {

        return ResponseEntity.ok(this.categoryService.getCategories());
    }
    //

    @PutMapping("/")

    public Category updateCategory(@RequestBody Category category)
    {
        return this.categoryService.updateCategory(category);
    }

    @DeleteMapping("/{categoryId}")
    public void deleteCatgory(@PathVariable("categoryId") Long categoryId)
    {
        this.categoryService.deleteCatgory(categoryId);
    }

}
