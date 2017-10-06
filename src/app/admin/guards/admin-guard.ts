import {Injectable, Optional} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../../login/services/login.service';
import {Observable} from 'rxjs/Observable';
import {LoginUriConfig} from '../../login/services/login-uri.config';
import {defaultLoginUriConfig} from '../../shared/config/login-uri.default.config';
import 'rxjs/add/operator/switchMap';
import {User} from '../../login/services/entities/user';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router,
              @Optional() private loginUriConfig: LoginUriConfig) {
    if (!loginUriConfig) {
      this.loginUriConfig = defaultLoginUriConfig;
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
