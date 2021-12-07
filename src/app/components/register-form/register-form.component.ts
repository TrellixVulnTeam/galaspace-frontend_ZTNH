import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {validators: this.checkPasswords});
  }
  get f(){
    return this.registerForm.controls;
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('form is invalid');
    } else {
      this.router.navigate(['/login']);
    }

  }
  checkPasswords(group: FormGroup) {
    const pass = group.get('password')!.value;
    const confirmPass = group.get('confirmPassword')!.value;

    return pass === confirmPass ? null : { notSame: true };

  }



}
