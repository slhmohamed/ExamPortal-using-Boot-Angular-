import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories:any
  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this._categoryService.catgories().subscribe(res=>{
      this.categories=res
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error!!","Error in loading data","error")
      
    })
  }

}
