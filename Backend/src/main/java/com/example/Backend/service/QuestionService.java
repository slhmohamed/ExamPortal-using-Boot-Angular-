package com.example.Backend.service;

import com.example.Backend.models.exam.Question;
import com.example.Backend.models.exam.Quiz;

import java.util.Set;

public interface QuestionService {
    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);
    public Set<Question> getQuestions();
    public Question getQuestion(Long questionId);
    public Set<Question> getQuestionOfQuiz(Quiz quiz);

    public void deleteQuestion(Long questId);
}
