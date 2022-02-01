package com.example.Backend.service.impl;

import com.example.Backend.models.exam.Category;
import com.example.Backend.models.exam.Quiz;
import com.example.Backend.repo.QuizRepository;
import com.example.Backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {
    @Autowired
    private QuizRepository quizRepository;
    @Override
    public Quiz addQuiz(Quiz quiz) {

        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizs() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizId) {

        return this.quizRepository.findById(quizId).get();
    }

    @Override
    public void deleteQuiz(Long qid) {
      this.quizRepository.deleteById(qid);

    }

    @Override
    public List<Quiz> getQuizzesOfCategory(Category category) {
        return this.quizRepository.findByCategory(category);
    }

    @Override
    public List<Quiz> getActiveQuiz() {
        return this.quizRepository.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizzesOfCategory(Category c) {
        return this.quizRepository.findByCategoryAndActive(c,true);
    }


}
