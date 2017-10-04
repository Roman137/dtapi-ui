import { Injectable } from '@angular/core';
import {loginConfig} from './config/login-service.config';
import {LoginService} from './login.service';
import {LoginSuccess} from './entities/login-success';
import {User} from './entities/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Credentials} from './entities/credentials';
import {LogoutSuccess} from './entities/logout-success';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  static loginSuccess(loginSuccess: LoginSuccess): User {
    if (loginSuccess.response === 'logged') {
      return <User>loginSuccess;
    }
    if (loginSuccess.response === 'ok') {
      return <User>loginSuccess;
    }
    return null;
  }

  isLoggedIn(): Observable<User> {
    return this.http.get<LoginSuccess>(loginConfig.isLogged)
      .map(AuthService.loginSuccess);
  }

  login(credentials: Credentials): Observable<User> {
    return this.http.post<LoginSuccess>(loginConfig.login, credentials)
      .map(AuthService.loginSuccess);
  }

  logout(): Observable<User> {
    return this.http.get<LogoutSuccess>(loginConfig.logout).map(() => null);
  }

}
