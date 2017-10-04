import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginGuard} from './login.guard';
import {NOT_LOGGED_IN_GUARD_TOKEN, notLoggedInGuardFactory} from './not-logged-in.guard';
import {LoginService} from './services/login.service';

const loginRoutes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ NOT_LOGGED_IN_GUARD_TOKEN]
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    {provide: NOT_LOGGED_IN_GUARD_TOKEN, useFactory: notLoggedInGuardFactory, deps: [LoginService, Router]}
  ]
})
export class LoginRoutingModule {
}
