import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuizService } from './../../../service/quiz.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qid;
quiz;
  constructor(
    private _router:Router,
    private _route:ActivatedRoute,private _quizService:QuizService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;

    this._quizService.getSingleQuiz(this.qid).subscribe(res=>{
this.quiz=res;
console.log(res);

    })

  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the Quiz?',
      
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon:'info',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._router.navigate(['/start/'+this.qid])
       
      } 
    })

  }

}
