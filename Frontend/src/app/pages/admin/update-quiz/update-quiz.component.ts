import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './../../../service/quiz.service';
import { CategoryService } from './../../../service/category.service';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _router:Router,private _route:ActivatedRoute,private _categoryService:CategoryService,private _quizService:QuizService) { }
  qid=0;
  quiz:any;
  categories:any;
  ngOnInit(): void {
   this.qid= this._route.snapshot.params.qid;
  this._quizService.getSingleQuiz(this.qid).subscribe(res=>{
    this.quiz=res
  })

  this._categoryService.catgories().subscribe(res=>{
    this.categories=res
  })


  }
  updateQuiz(){
    this._quizService.update(this.quiz).subscribe(res=>{
      Swal.fire('Success !!','Quiz updated','success').then(()=>{
        this._router.navigate(['/admin/quizzes'])
      })
    },(error)=>{
      Swal.fire('Error !!','Error in  updating quiz','error');
    })
  }


}
