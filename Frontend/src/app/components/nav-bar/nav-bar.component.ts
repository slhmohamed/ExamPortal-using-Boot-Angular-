import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isLoggedIn=false;
user:any;
  constructor(public _loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this._loginService.isLoggedIn();
    this.user=this._loginService.getUser()
    this._loginService.loginSttateSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this._loginService.isLoggedIn();
      this.user=this._loginService.getUser()
    })
  
  }
  logout(){
    this._loginService.logout();
   this._loginService.loginSttateSubject.next(false)
    window.location.reload();
  }

}
