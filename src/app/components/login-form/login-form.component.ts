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
  olvidoContrasena(){
    this.modalCorreo()
  }
  async modalCodigo(email: string) {
    const { value: codigo } = await Swal.fire({
      title: 'Codigo de  Confirmacion',
      text: 'Ingrese el codigo de confirmacion',
      input: 'text',
      inputLabel: 'Codigo',
      inputPlaceholder: 'Codigo',
    })
    if (codigo) {
      this.authService.confirmarCodigo(codigo, email).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Cuenta verificada',
            showConfirmButton: false,
            timer: 1500,
            didOpen: () => {
              Swal.showLoading()
            },
          }).then(() => {
            this.router.navigate(['/forgot-password']);
          } );

        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al verificar la cuenta',
          });
          console.log(error);
        }
      );
    }
  }
  async modalCorreo() {
    const { value: email } = await Swal.fire({
      title: 'Olvidaste tu contraseña?',
      input: 'email',
      inputLabel: 'Ingrese su email',
      inputPlaceholder: 'email'
    })

    if (email) {
      await this.authService.olvidoContrasena(email).subscribe(
        (data) => {
          this.modalCodigo(email);
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Error al enviar el correo',
            icon: 'error'
          }).then(() => {
            this.router.navigate(['/login']);
          })
        }
      );

    }
  }
  reenviarCorreo(){
/*     this.setData();
    this.authService.reenviarCorreo(this.dataLogin.email).subscribe(
      () => {
        Swal.fire({
          title: 'Correo enviado',
          text: 'Revisa tu correo',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      },
      () => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el correo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    ) */
    this.setData
    console.log(this.dataLogin.email);
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('form is invalid');
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched()
      });
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
              footer: "<p>¿No ha recibido el correo? <a href='reenviar-email' style='color: #3E2669;font-family: Arial Rounded MT Bold;'>Reenviar</a></p>",
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
