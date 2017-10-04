import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {LogoutComponent} from './logout/logout.component';
import {NotLoggedInGuard} from './guards/not-logged-in.guard';
import {loginUriConfig} from './services/config/login-uri.config';

const loginRoutes = [
  {
    path: loginUriConfig.login,
    component: LoginComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: loginUriConfig.logout,
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
    NotLoggedInGuard
  ]
})
export class LoginRoutingModule {
}
