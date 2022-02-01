package com.example.Backend.controller;

import com.example.Backend.models.exam.Category;
import com.example.Backend.models.exam.Quiz;
import com.example.Backend.service.QuizService;
import com.example.Backend.service.impl.QuizServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
    @Autowired
    private QuizService quizService;
    @PostMapping("/")

    public ResponseEntity<Quiz>add(@RequestBody Quiz quiz)
    {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }
    //update quiz

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz)
    {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    @GetMapping("/")
    public ResponseEntity<?> quizes()
    {
        return ResponseEntity.ok(this.quizService.getQuizs());
    }

    //get single quiz
    @GetMapping("/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid)
    {
        return this.quizService.getQuiz(qid);
    }

    //delete the quiz
    @DeleteMapping("/{qid}")
    public void delete(@PathVariable("qid") Long qid)
    {
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid)
    {
        Category category=new Category();
        category.setId(cid);
        return this.quizService.getQuizzesOfCategory(category);
    }
    //get active quizzes

    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes(){
        return this.quizService.getActiveQuiz();
    }

    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizzesOfCategory(@PathVariable("cid") Long cid){
      Category category=new Category();
      category.setId(cid);
        return this.quizService.getActiveQuizzesOfCategory(category);
    }
}
