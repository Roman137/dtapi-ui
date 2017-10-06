import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../shared/logger/logger-colors';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  private log = Log.create('NotLoggedInGuard');

  constructor(private loginService: LoginService) {
    this.log.color = loggerColors.guard;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url = '';
      try {
        url = route.url[route.url.length - 2].toString();
        this.loginService.redirectAfterLogin = '/' + url;
      } catch (err) {
      }
    return this.loginService.isLoggedIn().map(user => !user.isLogged());
  }
}
