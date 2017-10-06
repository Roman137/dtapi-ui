import {Component, OnInit} from '@angular/core';
import {Credentials} from './services/entities/credentials';
import {LoginService} from '../shared/services/login.service';
import {createLogger} from '../shared/logger/logger.factory';

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

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.credentials).subscribe();
  }

}

const log = createLogger(LoginComponent);
