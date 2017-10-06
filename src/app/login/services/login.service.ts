import {Injectable} from '@angular/core';
import {Credentials} from './entities/credentials';
import {User} from './entities/user';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publish';
import {ConnectableObservable} from 'rxjs/Rx';
import {defaultLoginUriConfig} from '../../shared/config/login-uri.default.config';

@Injectable()
export class LoginService {

  public user: User = new User();

  public redirectAfterLogin: string = null;

  private isLoggedInConnectable: ConnectableObservable<User> = null;
  private logoutInConnectable: ConnectableObservable<User> = null;

  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn().subscribe();
  }

  isLoggedIn(): Observable<User> {
    if (this.user.isLogged()) {
      return Observable.of(this.user);
    }
    return this.isLoggedInConnectable || this.establishHotConnectionForIsLoggedIn();
  }

  login(credentials: Credentials): Observable<User> {
    return this.auth.login(credentials)
      .do(user => {
        return this.setupUser(user);
      })
      .finally(() => {
        this.router.navigate([this.getRedirectionUrl()]);
      });
  }

  logout(): Observable<User> {
    return this.logoutInConnectable || this.establishHotConnectionForIsLogout();
  }

  private getRedirectionUrl(): string {
    if (this.redirectAfterLogin == null) {
      return '/';
    }
    if (this.redirectAfterLogin[0] !== '/') {
      this.redirectAfterLogin = '/' + this.redirectAfterLogin;
    }
    if (this.redirectAfterLogin[0] === defaultLoginUriConfig.login ||
      this.redirectAfterLogin[0] === defaultLoginUriConfig.logout
    ) {
      return '/';
    }
    return this.redirectAfterLogin;
  }

  private establishHotConnectionForIsLoggedIn(): ConnectableObservable<User> {
    this.isLoggedInConnectable = this.auth.isLoggedIn()
      .do(user => this.setupUser(user))
      .finally(() => this.isLoggedInConnectable = null)
      .publish();
    this.isLoggedInConnectable.connect();
    return this.isLoggedInConnectable;
  }

  private establishHotConnectionForIsLogout(): ConnectableObservable<User> {
    this.logoutInConnectable = this.auth.logout()
      .map((response) => this.dropUser())
      .finally(() => this.logoutInConnectable = null)
      .publish();
    this.logoutInConnectable.connect();
    return this.logoutInConnectable;
  }

  private setupUser(user: User): User {
    if (user) {
      this.user.id = user.id;
      this.user.username = user.username;
      this.user.roles = user.roles;
    }
    return user;
  }

  private dropUser(): User {
    const droppedUser = this.user.clone();
    const emptyUser = new User();
    this.user.id = emptyUser.id;
    this.user.username = emptyUser.username;
    this.user.roles = emptyUser.roles;
    return droppedUser;
  }

}
