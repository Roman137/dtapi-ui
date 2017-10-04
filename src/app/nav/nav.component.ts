import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  paths = [
    {value: 'login', desc: 'Login'}
    ];
  logoutLinkDesc = 'Logout';

  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    if (this.loginService.logout()) {
      this.router.navigate(['']);
    } else {
      /// TODO: logout error
    }
  }

}
