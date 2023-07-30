import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Registerclass } from '../models/registerclass';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login: Registerclass = new Registerclass();
  isLoggedIn: boolean = false;
  constructor(private loginservice: LoginService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'Email': new FormControl(),
      'Password': new FormControl()
    })
  }
  get Email() {
    return this.loginForm.get('Email');
  }
  get password() {
    return this.loginForm.get('Password');
  }
  logindata() {

    this.loginservice.addLogin(this.login).subscribe(response => {
<<<<<<< HEAD
      const data = response;
      this.isLoggedIn = data.success;
      this.authService.setIsLoggin(this.isLoggedIn);
      if (data.role == 'admin') {
        this.router.navigate(['/admin']);
      }
      if (data.role == 'user') {
=======
      // console.log(response);
      const data = response;
      this.loginservice.setUserId(data.userId);
      this.isLoggedIn = data.success;
      this.authService.setIsLoggin(this.isLoggedIn);
      if (data.role.toLowerCase() == 'admin') {
        this.router.navigate(['admin']);
      }
      if (data.role.toLowerCase() == 'user') {
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
        this.router.navigate(['user']);
      }

      this.loginForm.reset();
    }, error => {
      this.authService.setIsLoggin(this.isLoggedIn);
      if (error.status == 409) {
        alert('Login Failed ! Invalid credentials . . .');
      }
    });
  }
  validation() {
    if ((this.login.email == null || this.login.email == '') && (this.login.password == null || this.login.password == '')) {
      alert('Please Enter all the given credentials !');
    } else {
      alert('Login Failed ! Invalid credentials . . .');
    }
  }

}

