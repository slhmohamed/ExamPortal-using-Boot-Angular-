package com.example.Backend.service;

import com.example.Backend.models.exam.Category;

import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);
    public Category updateCategory(Category category);
    public Set<Category> getCategories();
    public Category getCategory(Long categoryId);
    public void deleteCatgory(Long categoryId);
}
