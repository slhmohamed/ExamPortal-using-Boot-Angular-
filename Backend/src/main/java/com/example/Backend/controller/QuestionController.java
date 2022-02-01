package com.example.Backend.controller;

import com.example.Backend.models.exam.Question;
import com.example.Backend.models.exam.Quiz;
import com.example.Backend.service.QuestionService;
import com.example.Backend.service.QuizService;
import com.example.Backend.service.impl.QuestionServiceImpl;
import com.example.Backend.service.impl.QuizServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuizService quizService;
    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @PutMapping("/")

    public ResponseEntity<Question> update(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    //get all question of any quid
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid)
    {
        //  Quiz quiz=new Quiz();
        //quiz.setQid(qid);
        //Set<Question> questionsOfQuiz=  this.questionService.getQuestionOfQuiz(quiz);
        //return ResponseEntity.ok(questionsOfQuiz);

        Quiz quiz=this.quizService.getQuiz(qid);
        quiz.getQid();
        Collection<Question> questions=quiz.getQuestions();

        List list=new ArrayList(questions);
        if(list.size()>Integer.parseInt(quiz.getNumberOfQuestion()))
        {
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestion()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);

    }


    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") Long qid)
    {
          Quiz quiz=new Quiz();
        quiz.setQid(qid);
         Set<Question> questionsOfQuiz=  this.questionService.getQuestionOfQuiz(quiz);
         return ResponseEntity.ok(questionsOfQuiz);


        //return ResponseEntity.ok(list);

    }
//get single question

    @GetMapping("/{quesId}")
    public Question get(@PathVariable("quesId") Long quesId)
    {
        return this.questionService.getQuestion(quesId);
    }

    //delete question

    @DeleteMapping("/{quesId}")
    public void delete(@PathVariable("quesId") Long quesId)
    {
        this.questionService.deleteQuestion(quesId);
    }




}
