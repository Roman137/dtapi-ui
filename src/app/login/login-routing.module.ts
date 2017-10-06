import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {LogoutComponent} from './logout/logout.component';
import {NotLoggedInGuard} from './guards/not-logged-in.guard';
import {defaultLoginUriConfig} from '../shared/config/login-uri.default.config';
import {RedirectAfterLoginPathSaverGuard} from './guards/redirect-after-login-path-saver.guard';

const loginRoutes = [
  {
    path: defaultLoginUriConfig.login, /// TODO: injectable loginUrlConfig
    component: LoginComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: defaultLoginUriConfig.logout,
    component: LogoutComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoggedInGuard,
    NotLoggedInGuard,
    RedirectAfterLoginPathSaverGuard
  ]
})
export class LoginRoutingModule {
}
