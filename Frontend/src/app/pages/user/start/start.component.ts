import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './../../../service/question.service';
import   Swal  from 'sweetalert2';
 

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
qid;
questions;

marksGot=0;
correctAnswers=0;
attempted=0;
isSubmit=false;
timer;

  constructor(
    private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _questionService:QuestionService
    ) { }

  ngOnInit(): void {

    this.preventBackButton();
    this.qid=this._route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestions();
    
  }
  loadQuestions() {
   this._questionService.getQuestionOfQuizForTest(this.qid).subscribe(res=>{
    this.questions=res
    this.timer=this.questions.length*2*60
    this.questions.forEach(q => {
      q['givenAnswer']='';
      
    });
    this.startTimer()
    console.log(this.questions);
    
   })
  }
  handleChange(evt,i)
  {
  this.questions[i]['givenAnswer']=evt;
  }
  preventBackButton(){
    history.pushState(null , "null" , location.href)
    this.locationSt.onPopState(()=>{
      history.pushState(null,"null",location.href)
    })
  }
  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit Quiz?',
       
      showCancelButton: true,
      confirmButtonText: 'Submit',
      
    }).then((e) => {
      /* Read more about isConfirmed, isDenied below */
      if (e.isConfirmed) {
       
    this.evalQuiz();
       
      } 
    })
  }
  evalQuiz() {
    this.isSubmit=true
    this.questions.forEach(q => {
      if(q.givenAnswer==q.answer)
      {
        this.correctAnswers++;
      let marksSingle=  this.questions[0].quiz.maxMarks/this.questions.length
     this.marksGot+=marksSingle 
     }
     if(q.givenAnswer.trim() != '')
     {
       this.attempted++;
     }

      
      
    });
    
  }
  startTimer()
  {
   let t= window.setInterval(()=>{
      if(this.timer<=0)
      {
        this.evalQuiz();
        clearInterval(t)
      }else{
        this.timer--;
      }
    },1000);
  }

  getFormatTime(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return `${mm} min : ${ss} sec`;
  }

}
