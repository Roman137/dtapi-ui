import {Injectable, Optional} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../shared/services/login.service';
import {Observable} from 'rxjs/Observable';
import {createLogger} from '../shared/logger/logger.factory';
import {LoginUriConfig} from '../shared/services/login-uri.config';
import {defaultLoginUriConfig} from '../shared/services/login-uri.default.config';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router,
              @Optional() private loginUriConfig: LoginUriConfig) {
    if (!loginUriConfig) {
      this.loginUriConfig = defaultLoginUriConfig;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;

    return this.loginService.isLoggedIn().map(user => user.isAdmin())
      .do(isAdmin => {
          log.info('is admin', isAdmin);
          if (!isAdmin) {
            this.loginService.redirectUrl = url;
            log.info('from url', this.loginService.redirectUrl);
            this.router.navigate(['/' + this.loginUriConfig.login]);
            log.info('redirected for authentication to', '/' + this.loginUriConfig.login);
          }
        }
      );
  }
}

const log = createLogger(AdminGuard);
