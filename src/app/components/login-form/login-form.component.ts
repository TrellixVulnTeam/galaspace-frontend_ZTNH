import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('form is invalid');
    }
    else{
      this.router.navigate(['/home']);
    }
  }



}
