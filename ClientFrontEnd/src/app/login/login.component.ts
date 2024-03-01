import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    userName: '',
    password: ''
  }

  constructor(private service: AuthService, private router: Router){}

  login(){
    this.service.login(this.loginData).subscribe((data:any) =>{
      localStorage.setItem('userName', data.result.userName);
      localStorage.setItem('token_value', data.result.token);
      this.router.navigate(['/clients']);
    },
    (errorData) => alert(errorData.error.displayMessage));
  }

}
