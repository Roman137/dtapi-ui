import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {LoginService} from '../services/login.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../services/entities/user';
import {Credentials} from '../services/entities/credentials';
import {LoginModule} from '../login.module';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page: Page;

  const user: User = new User('1', 'user', ['logged', 'user']);

  class LoginServiceSpy {
    login = jasmine.createSpy('login').and.callFake(
      (credentials: Credentials) => Observable.of(user)
    );
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule, RouterTestingModule],
      providers: [LoginService]
    })
      .overrideComponent(LoginComponent, {
        set: {
          providers: [
            {provide: LoginService, useClass: LoginServiceSpy}
          ]
        }
      })
      .compileComponents().then(
      () => {
        createComponent();
      }
    );

  }));

  function createComponent() {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    page = new Page();
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      fixture.detectChanges();
      page.addPageElements();
    });
  }

  it('should create', () => {
        expect(component).toBeTruthy();
  });

  it('should have a password input field', () => {
        expect(page.usernameInput).toBeTruthy();
  });

  it('should have a username input field', () => {
    expect(page.passwordInput).toBeTruthy();
  });

  it('should have a login button', () => {
    expect(page.loginBtn).toBeTruthy();
  });

  it('should call a method login() on login button click', () => {
    page.loginBtn.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(component.login).toHaveBeenCalledTimes(1);
    });
  });

  class Page {
    loginSpy: jasmine.Spy;

    loginBtn: DebugElement;
    usernameInput: HTMLInputElement;
    passwordInput: HTMLInputElement;

    constructor() {
      this.loginSpy = spyOn(component, 'login');
    }

    addPageElements() {
      const debugElement = fixture.debugElement;
      this.loginBtn = debugElement.query(By.css('button'));
      this.usernameInput = debugElement.query(By.css('#password')).nativeElement;
      this.passwordInput = debugElement.query(By.css('#username')).nativeElement;
    }
  }
});
