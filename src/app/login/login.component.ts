import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api:ApiService,private route:Router,private toastr: ToastrService) {}

  username:string=""
  password:string=""

  login(){
    if(this.username&&this.password){
      this.api.Authenticate().subscribe({
        next:(res:any)=>{//res->username,password
          const {username,password}=res 
          if(username==this.username&&password==this.password){
            // alert('login successful')
            this.toastr.success('Login successful')
            setTimeout(()=>{
              this.route.navigateByUrl('/dashboard')
            },2000)

          }
          else{
            this.toastr.warning('Invalid username or password')
          }
        },
        error:(res:any)=>{
          this.toastr.error(res.message);
          
        }
      })
    }
   
  }

}
