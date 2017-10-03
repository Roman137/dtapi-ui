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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
