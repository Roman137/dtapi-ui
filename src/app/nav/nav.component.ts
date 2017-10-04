import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';
import {loginUriConfig} from '../login/services/config/login-uri.config';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loginPath = {value: loginUriConfig.login, desc: 'Login'};
  logoutPath = {value: loginUriConfig.logout, desc: 'Logout'};

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
