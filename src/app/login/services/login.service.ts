import {Injectable} from '@angular/core';
import {Credentials} from './entities/credentials';
import {User} from './entities/user';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../misc/logger-colors';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';


@Injectable()
export class LoginService {

  user: User = null;

  redirectUrl: string = null;

  private log = Log.create('LoginService');

  constructor(private auth: AuthService) {
    this.log.color = loggerColors.service;
    this.log.info('is logged in ? : ', this.recheckLogin());
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
            }
          },
          err => {
            this.user = null;
            this.log.warn('user is not logged in', 'err', err);
          }
        );
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
            } else {
              this.log.info('logging in was unsuccessful', 'user', this.user);
            }
          },
          err => {
            this.user = null;
            this.log.error('error during logging in', 'err', err);
          }
        );
  }

  logout() {
      this.auth.logout().subscribe(
        response => {
          this.user = null;
          this.log.info('logged out successfully', 'response', response);
        },
        err => {
          this.log.warn('logged out unsuccessfully', 'err', err);
        }
      );
  }

}
