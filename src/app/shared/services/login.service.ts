import {Injectable} from '@angular/core';
import {Credentials} from '../../login/services/entities/credentials';
import {User} from '../../login/services/entities/user';
import 'rxjs/add/operator/map';
import {AuthService} from '../../login/services/auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {createLogger} from '../logger/logger.factory';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  public user: User = new User();

  public redirectUrl: string = null;

  private pending = false;

  constructor(private auth: AuthService, private router: Router) {
    this.init();
  }

  isLoggedIn(): Observable<User> {
    if (this.user.isLogged()) {
      return Observable.of(this.user);
    }
    this.pending = true;
    return this.auth.isLoggedIn()
      .do(user => this.setupUser(user))
      .finally(() => this.pending = false);
  }

  login(credentials: Credentials): Observable<User> {
    return this.auth.login(credentials)
      .do(user => {
        log.info('logged in successfully', user);
        return this.setupUser(user);
      })
      .finally(() => {
        log.info('redirecting to', this.redirectUrl || '/');
        this.router.navigate([this.redirectUrl || '/']);
      });
  }

  logout(): Observable<User> {
    return this.auth.logout()
      .do((response) => this.dropUser());
  }

  private init(): void {
    this.isLoggedIn().subscribe();
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

const log = createLogger(LoginService);
