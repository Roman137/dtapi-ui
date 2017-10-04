import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../misc/logger-colors';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  private log = Log.create('NotLoggedInGuard');

  constructor(private loginService: LoginService) {
    this.log.color = loggerColors.guard;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.loginService.isLoggedIn();
  }
}
