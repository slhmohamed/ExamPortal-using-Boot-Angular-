import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import   Swal  from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={
    title:'',
    description:''
  }
  constructor(public _categoryService:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }
formSubmit()
{

  if(this.category.title.trim()==''||this.category.title==null)
  {
    this._snack.open('Title Required !!','',{
      duration:3000,
    })
    return ;
  }

  this._categoryService.addCategories(this.category).subscribe(res=>{
    this.category.title='';
    this.category.description='';

    Swal.fire('Success','Category added succefuly','success');
  },(error)=>{
    Swal.fire("Error !!",'Server error!!','error')
  })

}
}
