import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';
import {defaultLoginUrlConfig} from '../login/config/login-url.default.config';
import {User} from '../login/services/entities/user';
import {createLogger} from '../shared/logger/logger.factory';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  login = {path: defaultLoginUrlConfig.login, desc: 'Login'};
  logout = {path: defaultLoginUrlConfig.logout, desc: 'Logout'};

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {}

}

const log = createLogger(NavComponent);
