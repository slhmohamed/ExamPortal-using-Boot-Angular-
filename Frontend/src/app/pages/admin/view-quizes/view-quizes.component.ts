import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../../service/quiz.service';
import   Swal  from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {
  quizzes:any
  constructor(private _quizServie:QuizService) { }

  ngOnInit(): void {
   this.getAllQuizes();
  }
  getAllQuizes(){

    this._quizServie.getQuizzes().subscribe(res=>{
      console.log(res);
      
      this.quizzes=res
    },(error)=>{
      Swal.fire('Error !','Error in loading data ! ','error')
    })
  }
  deleteQuiz(qid:any){
  Swal.fire({
    icon:'info',
    title:"are you sure ?",
    confirmButtonText:"Delete",
    showCancelButton:true
  }).then((result)=>{
    if(result.isConfirmed)
   { this._quizServie.deleteQuiz(qid).subscribe(res=>{
       this.getAllQuizes();
       Swal.fire('Success','Quiz deleted','success')
    })}
  })
  }

}
