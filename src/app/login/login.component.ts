import {Component, OnInit} from '@angular/core';
import {Credentials} from './services/entities/credentials';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {
    username: 'admin',
    password: 'dtapi_admin'
  };

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.credentials);
  }

}
