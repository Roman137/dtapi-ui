import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';
import {createLogger} from '../../shared/logger/logger.factory';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.loginService.logout().subscribe(
      (hasBeenLoggedOut) => {
        log.info('hasBeenLoggedOut', hasBeenLoggedOut);
        if (hasBeenLoggedOut) {
          this.router.navigate(['']);
        }
      },
      err => {
      },
      () => {
      }
    );
  }
}


const log = createLogger(LogoutComponent);
