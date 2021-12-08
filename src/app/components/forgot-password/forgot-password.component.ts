import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  constructor(private fb: FormBuilder, private router:Router, private authService: AuthService) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    }, {validators: this.checkPasswords});
  }
  get f(){
    return this.passwordForm.controls;
  }
  onResetPassword() {
    localStorage.removeItem('token_login');
    this.router.navigate(['/login']);
  }
  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return Object.values(this.passwordForm.controls).forEach(control => {
        control.markAsTouched()
      });
    } else {
      this.authService.actualizarContrasena(this.passwordForm.value).subscribe(
        (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Listo!',
              text: 'Contraseña actualizada con exito',
            })
          this.onResetPassword()
        } ,
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, intenta de nuevo',
          });
        }

      );
        console.log(this.passwordForm.value);
    }

  }
  checkPasswords(group: FormGroup) {
    const pass = group.get('password')!.value;
    const confirmPass = group.get('password_confirmation')!.value;

    return pass === confirmPass ? null : { notSame: true };

  }
}
