import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login/login.component';
import {LoginMaterialModule} from '../custom-material-modules/login-material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {LogoutComponent} from './logout/logout.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    LoginRoutingModule,
    LoginMaterialModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule {
}
