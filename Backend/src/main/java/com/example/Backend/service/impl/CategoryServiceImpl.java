package com.example.Backend.service.impl;

import com.example.Backend.models.exam.Category;
import com.example.Backend.repo.CatgoryRepository;
import com.example.Backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CatgoryRepository catgoryRepository;
    @Override
    public Category addCategory(Category category) {

        return this.catgoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {

        return  this.catgoryRepository.save(category);
    }

    @Override
    public Set<Category> getCategories() {

        return new LinkedHashSet<>(this.catgoryRepository.findAll());
    }



    @Override
    public Category getCategory(Long categoryId) {
        return this.catgoryRepository.findById(categoryId).get();
    }

    @Override
    public void deleteCatgory(Long categoryId) {
            Category category=new Category();
            category.setId(categoryId);
        this.catgoryRepository.delete(category);

    }
}
