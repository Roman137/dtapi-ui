import {Injectable, Optional} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../../login/services/login.service';
import {Observable} from 'rxjs/Observable';
import {LoginUrlConfig} from '../../login/config/login-url.config';
import {defaultLoginUrlConfig} from '../../login/config/login-url.default.config';
import 'rxjs/add/operator/switchMap';
import {User} from '../../login/services/entities/user';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router,
              @Optional() private loginUriConfig: LoginUrlConfig) {
    if (!loginUriConfig) {
      this.loginUriConfig = defaultLoginUrlConfig;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.loginService.redirectAfterLogin = state.url;

    const obs: Observable<User> = this.loginService.isLoggedIn();

    return obs
      .map(user => user.isAdmin())
      .do(isAdmin => {
          if (!isAdmin) {
            this.router.navigate(['/' + this.loginUriConfig.login]);
          }
        }
      );
  }
}
