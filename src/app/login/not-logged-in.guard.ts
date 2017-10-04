import {InjectionToken} from '@angular/core';
import {LoginGuard} from './login.guard';
import {Router} from '@angular/router';
import {LoginService} from './services/login.service';

export const NOT_LOGGED_IN_GUARD_TOKEN = new InjectionToken<LoginGuard>('foobar-resolver.alpha');

export const notLoggedInGuardFactory = (loginService: LoginService, router: Router) => {
  return new LoginGuard(loginService, router, true);
};
