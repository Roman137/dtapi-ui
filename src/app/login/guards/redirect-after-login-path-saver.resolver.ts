import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';
import {UrlUtils} from '../utils/url-utils';

@Injectable()
export class RedirectAfterLoginPathSaverResolver implements Resolve<void> {



  constructor(private loginService: LoginService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.loginService.redirectAfterLogin = '/' + (UrlUtils.previousUrl(route) || '');
  }
}

