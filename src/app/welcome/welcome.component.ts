import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
