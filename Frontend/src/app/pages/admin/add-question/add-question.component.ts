import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import  Swal  from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qid;
  qtitle;
question = {
quiz : {},
content:'',
option1:'',
option2:'',
option3:'',
option4:'',
answer:'',
}
  constructor(private _route:ActivatedRoute,private _questionService:QuestionService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    console.log(this.qid);
    
    this.qtitle=this._route.snapshot.params.title;
    console.log(this.qtitle);
    
   this.question.quiz['qid']=this.qid;
  }

  formSubmit(){
    if(this.question.content.trim()==''||this.question.content==null){
      return ;
    }

    if(this.question.option1.trim()==''||this.question.option1==null){
      return ;
    }

    if(this.question.option2.trim()==''||this.question.option2==null){
      return ;
    }

    if(this.question.option3.trim()==''||this.question.option3==null){
      return ;
    }

    if(this.question.option4.trim()==''||this.question.option4==null){
      return ;
    }

    if(this.question.answer.trim()==''||this.question.answer==null){
      return ;
    }
    this._questionService.addQuestion(this.question).subscribe(res=>{
      Swal.fire('Success','Question added Succesfuly','success')
    },(error)=>{
      Swal.fire('Error','Error in adding question','error')
    })

    

  }

}
