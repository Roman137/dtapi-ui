import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './services/login.service';
import {Log} from 'ng2-logger';
import {loggerColors} from '../misc/logger-colors';
import {BooleanUtils} from '../shared/boolean-utils';

@Injectable()
export class LoginGuard implements CanActivate {

  private log = Log.create('LoginGuard');

  private negation = false;

  constructor(private loginService: LoginService, private router: Router, negation?: boolean) {
    this.log.color = loggerColors.guard;
    if (negation) {
      this.negation = negation;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    const isLoggedIn = this.loginService.isLoggedIn();

    this.log.info('recheckLogin', isLoggedIn);

    const canActivate = BooleanUtils.additionMod2(this.negation, isLoggedIn);
    this.log.info('canActivate', canActivate);

    if (!canActivate) {
      if (!this.negation) {
        this.loginService.redirectUrl = url;
        this.log.info('redirecting to /login', 'savedUrl:', url);
        this.router.navigate(['/login']);
      }
    }
    return canActivate;
  }
}
