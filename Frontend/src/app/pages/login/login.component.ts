import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
 
import { MatSnackBar } from '@angular/material/snack-bar';
 import { LoginService } from './../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }
  constructor(private router:Router,
    private snack:MatSnackBar,private _loginService:LoginService) { }

  ngOnInit(): void {
  }
   formSubmit(){

    if(this.loginData.username.trim()==''||this.loginData.username==null)
  {
    this.snack.open("Username is required!!",'',{
      duration:3000,
    });
    return;
  }
  //request to server to generate token
  this._loginService.generateToken(this.loginData).subscribe(  (res:any)=>{
 console.log(res.token);
 
     this._loginService.loginUser(res.token);

    this._loginService.getCurrentUser().subscribe((user:any)=>{
      this._loginService.setUser(user);
 
      //redirect ..ADMIN:admin-dashboard
      //redirect ..NORMAL:normal-dashboard
  
      if(this._loginService.getUserRole()=='ADMIN')
      {

        this.router.navigate(['admin']);
        this._loginService.loginSttateSubject.next(true)
       
 
        //admin   dashboard
      }else if(this._loginService.getUserRole()=='NORMAL')
      {  //normal user dashboard
        this.router.navigate(['user-dashboard/0']) 
        this._loginService.loginSttateSubject.next(true)
        
 
        
      }else{
  
        this._loginService.logout();
        
  
      }
    });
  
  },(error)=>{

    this.snack.open("Invalid Details !! Try again",'',{
      duration:3000,
    });

  })

  }

}
