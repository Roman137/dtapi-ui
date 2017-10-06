import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  defaultUserName = 'mortal';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
