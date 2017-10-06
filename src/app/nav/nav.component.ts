import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';
import {defaultLoginUriConfig} from '../shared/config/login-uri.default.config';

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
