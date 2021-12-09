import { Login } from 'src/app/interfaces/login';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreated } from 'src/app/interfaces/user-created';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  data!: Login;
  constructor(private fb: FormBuilder, private router:Router, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    }, {validators: this.checkPasswords});
  }
  get f(){
    return this.registerForm.controls;
  }

  setValues(): void {
    this.data = {
      name: this.registerForm.get('name')!.value,
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value,
      password_confirmation: this.registerForm.get('password_confirmation')!.value,
      returnSecureToken: true,
    }
  }


  onSubmit(form: FormGroup) {
    this.setValues();
    if (form.invalid) {
      return Object.values(this.registerForm.controls).forEach(control => {
        control.markAsTouched()
      });
    } else {
      this.authService.signUp(this.data).subscribe(
        (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Listo!',
              text: 'Ahora ya tienes cuenta :D.',
            }).then(() => {
              this.router.navigate(['/login'])
            })
      

        } ,
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, intenta de nuevo',
          });
        }

      );
        console.log(this.registerForm.value);
    }

  }
  checkPasswords(group: FormGroup) {
    const pass = group.get('password')!.value;
    const confirmPass = group.get('password_confirmation')!.value;

    return pass === confirmPass ? null : { notSame: true };

  }



}
