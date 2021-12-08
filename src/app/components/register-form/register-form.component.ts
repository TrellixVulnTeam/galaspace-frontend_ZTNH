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

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('form is invalid');
    } else {
      this.authService.signUp(this.registerForm.value).subscribe(
        (res) => {
          if (res.status === true) {
            Swal.fire({
              icon: 'success',
              title: 'Listo!',
              text: 'Se te ha enviado un correo para confirmar tu cuenta.',
              footer: '<p>¿No has recibido el correo? <a href="" style="color: #3E2669;font-family: Arial Rounded MT Bold;">Reenviar</a><p>'
            }).then(() => {
              this.router.navigate(['/login'])
            })
          }

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
