import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {LoginService} from './services/login.service';
import {LoginCustomMaterialModule} from '../custom-material-module/login-custom-material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    LoginRoutingModule,
    LoginCustomMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
