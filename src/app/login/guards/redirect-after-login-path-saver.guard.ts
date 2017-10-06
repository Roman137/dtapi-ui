import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class RedirectAfterLoginPathSaverGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.loginService.redirectAfterLogin = state.url;
    return true;
  }
}
