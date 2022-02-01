package com.example.Backend.repo;

import com.example.Backend.models.exam.Question;
import com.example.Backend.models.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    Set<Question> findByQuiz(Quiz quiz);

}
