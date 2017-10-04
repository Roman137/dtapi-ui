import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {NavComponent} from './nav/nav.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DomainUrlAppenderInterceptor} from './shared/domain-url-appender.interceptor';
import {AppMaterialModule} from './custom-material-modules/app-material.module';
import { WelcomePipe } from './welcome/welcome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    WelcomePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DomainUrlAppenderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
