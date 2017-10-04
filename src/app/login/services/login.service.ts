import {Injectable} from '@angular/core';
import {Credentials} from './entities/credentials';
import {User} from './entities/user';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../misc/logger-colors';
import {loginConfig} from './config/login-service.config';
import {HttpClient} from '@angular/common/http';
import {LogoutSuccess} from './entities/logout-success';
import {LoginSuccess} from './entities/login-success';
import 'rxjs/add/operator/map';

const log = Log.create('LoginService');
log.color = loggerColors.service;

@Injectable()
export class LoginService {

  user: User = null;

  static responseToUser(loginSuccess: LoginSuccess): User {
    if (loginSuccess.response === 'logged') {
      return <User>loginSuccess;
    }
    if (loginSuccess.response === 'ok') {
      return <User>loginSuccess;
    }
    return null;
  }

  constructor(private http: HttpClient) {
    log.info('is logged in ? : ', this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return null !=
      this.http.get<LoginSuccess>(loginConfig.isLogged)
        .map(LoginService.responseToUser)
        .subscribe(
          user => {
            this.user = user;
            log.info('user is logged in', 'this.user', this.user);
            return user;
          },
          err => {
            this.user = null;
            log.warn('user is not logged in', 'err', err);
            return null;
          }
        );
  }

  isLoggedInSoft(): boolean {
    return this.user != null;
  }

  login(credentials: Credentials): boolean {
    return null !=
      this.http.post<LoginSuccess>(loginConfig.login, credentials)
        .map(LoginService.responseToUser)
        .subscribe(
          user => {
            if (user) {
              this.user = user;
              log.info('logging in was successful', 'user', this.user);
            } else {
              log.info('logging in was unsuccessful', 'user', this.user);
            }
            return user;
          },
          err => {
            log.error('error during logging in', 'err', err);
            return null;
          }
        );
  }

  logout(): boolean {
    return null !=
      this.http.get<LogoutSuccess>(loginConfig.logout).subscribe(
        response => {
          this.user = null;
          log.info('logged out successfully', 'response', response);
          return true;
        },
        err => {
          log.warn('logged out unsuccessfully', 'err', err);
          return null;
        }
      );
  }

}
