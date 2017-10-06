import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/services/login.service';
import {createLogger} from '../shared/logger/logger.factory';
import {defaultLoginUriConfig} from '../shared/services/login-uri.default.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  login = {path: defaultLoginUriConfig.login, desc: 'Login'};
  logout = {path: defaultLoginUriConfig.logout, desc: 'Logout'};

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}

const log = createLogger(NavComponent);
