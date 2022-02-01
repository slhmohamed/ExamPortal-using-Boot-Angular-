package com.example.Backend.service;

import com.example.Backend.models.exam.Category;
import com.example.Backend.models.exam.Quiz;

import java.util.List;
import java.util.Set;

public interface QuizService {
    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public Set<Quiz> getQuizs();
    public Quiz getQuiz(Long quizId);
    public void deleteQuiz(Long qid);
    public List<Quiz> getQuizzesOfCategory(Category category);
    public List <Quiz> getActiveQuiz();
    public List<Quiz> getActiveQuizzesOfCategory(Category c);


}

