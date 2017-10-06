import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';
import {Log} from 'ng2-logger';
import {loggerColors} from '../../shared/logger/logger-colors';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LoggedInGuard implements CanActivate {

  private log = Log.create('LoggedInGuard');

  constructor(private loginService: LoginService) {
    this.log.color = loggerColors.guard;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return Observable.of(this.loginService.user.isLogged());
  }
}
