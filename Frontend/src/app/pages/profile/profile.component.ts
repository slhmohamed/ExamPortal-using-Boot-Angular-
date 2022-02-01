import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
    this._loginService.getCurrentUser().subscribe(res=>{
      this.user=res
      console.log(this.user);
      
    })
  }

}
