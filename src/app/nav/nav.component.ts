import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';
import {loginUriConfig} from '../login/services/config/login-uri.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  paths = [
    {value: loginUriConfig.login, desc: 'Login'},
    {value: loginUriConfig.logout, desc: 'Logout'}
  ];

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
