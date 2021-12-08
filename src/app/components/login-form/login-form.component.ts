import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  dataLogin!: Login;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
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

  setData(): void {
    this.dataLogin = {
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value
    }
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('form is invalid');
    }
    else{
      this.setData();
      this.authService.login(this.dataLogin).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500,
            didOpen: () => {
              Swal.showLoading()
            },
          }).then(() => {
            this.router.navigate(['/']);
          } );

        },
        (error) =>{
          if (error['status'] == 403){
            Swal.fire({
              icon: 'error',
              title: 'Ups!',
              text: 'Cuenta sin verificar, por favor revise su correo',
              footer: "<p>¿No ha recibido el correo? <a (click)='reenviarCorreo()'>Reenviar</a></p>",
            });
          }
          if (error['status'] == 400){
            Swal.fire({
              icon: 'error',
              title: 'Ups!',
              text: 'Datos incorrectos',
            });
          }
        }
      );
    }
  }



}
