import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './../../../service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  catId;
  quizes;
  constructor(private _route:ActivatedRoute,private _quizService:QuizService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.catId=params.catId;
  
     
      if(this.catId==0){
        this._quizService.getQuizActive().subscribe(res=>{
          this.quizes=res;
        })
        console.log("Load all the quiz");
        
      }else{

     this._quizService.getActiveQuizzesOfCatgory(this.catId).subscribe(res=>{
       this.quizes=res
     })
        console.log("load specific quiz");
        
      }
    })

   

  
  }

}
