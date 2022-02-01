package com.example.Backend.repo;

import com.example.Backend.models.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatgoryRepository  extends JpaRepository<Category,Long> {
}
