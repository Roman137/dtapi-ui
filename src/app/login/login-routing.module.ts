import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {LogoutComponent} from './logout/logout.component';
import {NotLoggedInGuard} from './guards/not-logged-in.guard';
import {defaultLoginUrlConfig} from './config/login-url.default.config';
import {RedirectAfterLoginPathSaverResolver} from './guards/redirect-after-login-path-saver.resolver';

const loginRoutes = [
  {
    path: defaultLoginUrlConfig.login, /// TODO: injectable loginUrlConfig
    component: LoginComponent,
    canActivate: [NotLoggedInGuard],
    resolve: {
      dummy: RedirectAfterLoginPathSaverResolver
    }
  },
  {
    path: defaultLoginUrlConfig.logout,
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
    RedirectAfterLoginPathSaverResolver
  ]
})
export class LoginRoutingModule {
}
