import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../confirm-password.validator';
import { Registerclass } from '../models/registerclass';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  details: Registerclass = new Registerclass();
  registerForm!: FormGroup;
  constructor(private loginservice: LoginService, private router: Router){

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      role: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required,Validators.email]),
      Username: new FormControl('',[Validators.required]),
      Mobilenumber: new FormControl('',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]),
      Password: new FormControl('',[Validators.required,Validators.pattern("(?=.*[!@#$%^&*()_+\-+?])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
      Confirmpassword: new FormControl(''),
      
    },
    {
      validators: confirmPasswordValidator
    })
  }

  
  

  get person(){
    return this.registerForm.get('role')
  }
  get email(){
    return this.registerForm.get('Email')
  }
  get username(){
    return this.registerForm.get('Username')
  }
  get mobilenumber(){
    return this.registerForm.get('Mobilenumber')
  }
  get password(){
    return this.registerForm.get('Password')
  }
  get confirmpassword(){
    return this.registerForm.get('Confirmpassword')
  }

  onSubmit(){
    this.addRegister();
  }

  addRegister(){
    this.loginservice.addRegister(this.details).subscribe(response => {
      alert(response.message);
      this.registerForm.reset();
    }, error => {
      if (error.status === 409) {
        alert(error.error.message);
      }else {
        console.log(error);
      }
  });
}
  goToLogin(){
    this.router.navigate(['login']);
  }
}
