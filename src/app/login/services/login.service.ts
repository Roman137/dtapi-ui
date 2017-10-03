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

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    this.http.get<string>(loginConfig.isLogged).subscribe(
      response => {
        const res = JSON.parse(response);
        if (res instanceof User) {
          this.user = res;
          log.info('user is logged in', 'user', this.user);
          return true;
        } else {
          this.user = null;
          log.info('user is logged not in', 'user', this.user);
          return false;
        }
      }
    );
    return false;
  }

  isLoggedInSoft(): boolean {
    return this.user != null;
  }

  login(credentials: Credentials): boolean {
    this.http.post<LoginSuccess>(loginConfig.login, credentials)
      .subscribe(
        (response) => {
          log.info('response', response);
          if (response.response === 'ok') {
            this.user = new User();
            this.user.username = response.username;
            this.user.id = response.id;
            this.user.roles = response.roles;
            log.info('logging in was successful', 'user', this.user);
            return true;
          } else {
            log.warn('logging in was unsuccessful', 'response', response.response);
            return false;
          }
        },
        err => {
          log.error('error during logging in', 'err', err);
        }
      );
    return false;
  }

  logout(): boolean {
    this.http.get<LogoutSuccess>(loginConfig.logout).subscribe(
      response => {
        this.user = null;
        log.info('logged out successfully', 'user', this.user);
        return true;
      },
      err => {
        log.warn('logged out unsuccessfully', 'err', err);
      }
    );
    return false;
  }

}
