import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../service/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories;
  constructor(private _cat:CategoryService) { }

  ngOnInit(): void {
    this._cat.catgories().subscribe(res=>{
      this.categories=res
    })
  }

}
