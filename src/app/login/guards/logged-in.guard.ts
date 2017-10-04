import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../misc/logger-colors';

@Injectable()
export class LoggedInGuard implements CanActivate {

  private log = Log.create('LoggedInGuard');

  constructor(private loginService: LoginService, private router: Router) {
    this.log.color = loggerColors.guard;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    if (this.loginService.isLoggedIn()) {
      return true;
    }
    if (url === '/logout') {
      return false;
    }

    this.loginService.redirectUrl = url;
    this.log.info('redirecting to /login', 'savedUrl:', url);
    this.router.navigate(['/login']);
    return false;
  }
}
