import {Injectable} from '@angular/core';
import {Credentials} from './entities/credentials';
import {User} from './entities/user';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../misc/logger-colors';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {loginUriConfig} from './config/login-uri.config';


@Injectable()
export class LoginService {

  user: User = null;

  redirectUrl: string = null;

  private log = Log.create('LoginService');

  constructor(private auth: AuthService, private router: Router) {
    this.log.color = loggerColors.service;
    this.recheckLogin();
    this.log.info('is logged in', this.isLoggedIn());
  }

  recheckLogin() {
    this.auth.isLoggedIn()
      .subscribe(
        user => {
          this.user = user;
          if (user) {
            this.log.info('user is logged in', 'this.user', this.user);
          } else {
            this.log.warn('user is not logged in', 'user', user);
            this.navigateToSessionEndedPage();
          }
        },
        err => {
          this.user = null;
          this.log.warn('user is not logged in', 'err', err);
          this.navigateToSessionEndedPage();
        }
      );
  }

  navigateToSessionEndedPage() {
    /// TODO: navigate to a session has been suddenly suspended page. For now: Home
    this.router.navigate(['']);
  }

  navigateToLoginErrorPage() {
    /// TODO: navigate to an login error page. For now: Login
    this.router.navigate([loginUriConfig.login]);
  }

  isLoggedIn() {
    return this.user != null;
  }

  login(credentials: Credentials) {
    this.auth.login(credentials)
      .subscribe(
        user => {
          this.user = user;
          if (user) {
            this.log.info('logging in was successful', 'user', this.user);
            this.router.navigate(['']);
          } else {
            this.log.info('logging in was unsuccessful', 'user', this.user);
            this.navigateToLoginErrorPage();
          }
        },
        err => {
          this.user = null;
          this.log.error('error during logging in', 'err', err);
          this.navigateToLoginErrorPage();
        }
      );
  }

  logout() {
    this.auth.logout().subscribe(
      () => {
        this.user = null;
        this.log.info('logged out successfully');
        this.router.navigate(['']);
      },
      err => {
        this.log.warn('logged out unsuccessfully', 'err', err);
        /// TODO: error page navigation
        this.router.navigate(['']);
      }
    );
  }

}
