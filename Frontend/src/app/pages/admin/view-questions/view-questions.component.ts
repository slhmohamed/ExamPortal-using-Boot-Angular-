import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from './../../../service/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  qid=0;
  qtitle="";
  questions:any
  constructor(
    private _route:ActivatedRoute,
    private _questionService:QuestionService

  ) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    this.qtitle=this._route.snapshot.params.title;

    this.getAllQuestions()
  }
  getAllQuestions(){
    this._questionService.getQuestionOfQuiz(this.qid).subscribe(res=>{
      this.questions=res
    })
  }
  deletQuestion(quesId)
  {
    Swal.fire({
      icon:'info',
      title:"are you sure ?",
      confirmButtonText:"Delete",
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed)
     { this._questionService.deleteQuestion(quesId).subscribe(res=>{
         this.getAllQuestions();
         Swal.fire('Success','Question deleted','success')
      })}
    })
  }

}
