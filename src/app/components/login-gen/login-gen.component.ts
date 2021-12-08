import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login-gen',
  templateUrl: './login-gen.component.html',
  styleUrls: ['./login-gen.component.css']
})
export class LoginGenComponent implements OnInit {
  name: any;
  status: boolean = false;

  constructor(private router: Router,) {

  }

  ngOnInit() {
    if (this.router.url === '/register') {
      this.status = true;
    }
    else {
      this.status = false;
    }
  }

}
