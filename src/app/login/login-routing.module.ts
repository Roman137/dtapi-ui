import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

const loginRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
