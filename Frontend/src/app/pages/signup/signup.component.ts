import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User={
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
}
  constructor(private userService:UserService,
    private _snack:MatSnackBar) { }
 
  
  ngOnInit(): void {
  }
  formSubmit(){
  if(this.user.username==''||this.user.username==null){
    this._snack.open('Username is required!!','',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'right'
    });
    return ;
  }
  this.userService.newUser(this.user).subscribe(res=>{
    if(res)
      {Swal.fire('Success','user is registered','success')}
   
    
  },(error)=>{
    this._snack.open('Something went wrong !!','',{
      duration:3000
    })
  })
    
  }

}
