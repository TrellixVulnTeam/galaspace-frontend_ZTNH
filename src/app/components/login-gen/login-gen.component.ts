import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-gen',
  templateUrl: './login-gen.component.html',
  styleUrls: ['./login-gen.component.css'],
})
export class LoginGenComponent implements OnInit {
  name: any;
  login: boolean = false;
  register: boolean = false;
  password: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.router.url === '/register') {
      this.register = true;
    } else if (this.router.url === '/login') {
      this.login = true;
    } else if (this.router.url === '/reenviar-email') {
      this.login= true;
      this.modalCorreo();
    }else{
      this.password = true;
    }
  }
  async modalCorreo() {
    const { value: email } = await Swal.fire({
      title: 'Reenviar Email',
      input: 'email',
      inputLabel: 'Ingrese su email',
      inputPlaceholder: 'email'
    })

    if (email) {
      await this.authService.reenviarCorreo(email).subscribe(
        (data) => {
          Swal.fire({
            title: 'Email enviado',
            text: 'Revise su correo',
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/login']);
          }
          )
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Error al enviar el correo',
            icon: 'error'
          }).then(() => {
            this.router.navigate(['/login']);
          } )
        }
      );

    }
  }
}
