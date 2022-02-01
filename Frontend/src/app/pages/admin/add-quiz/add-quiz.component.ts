import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../service/category.service';
import  Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../service/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories:any
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{
      id:''
    }
  }
  constructor(
    private _quizServie:QuizService,
    private _snak:MatSnackBar,
    private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this._categoryService.catgories().subscribe(res=>{
      this.categories=res
    })
  }
  addQuiz()
  {
    if(this.quizData.title.trim()==''||this.quizData.title==null)
    {
      this._snak.open('Title is required !!','',{
        duration:3000
      });
      return;
    }
this._quizServie.addQuiz(this.quizData).subscribe(res=>{
  Swal.fire('Sucess','Quiz is added','success');
  this.quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{
      id:''
    }
  }
},(error)=>{
  Swal.fire('Error','Error while adding quiz','error')
})
    
  }

}
