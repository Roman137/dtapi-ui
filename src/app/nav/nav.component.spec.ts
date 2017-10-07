import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavComponent} from './nav.component';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {RouterLinkStubDirective} from '../../testing/router-stubs';
import {By} from '@angular/platform-browser';
import {LoginService} from '../login/services/login.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../login/services/entities/user';
import {userDummy} from '../../testing/user-dummy';
import {RouterLink} from '@angular/router';
import {AppComponent} from '../app.component';
import {AppMaterialModule} from '../custom-material-modules/app-material.module';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let links: RouterLink[];
  let linkDes: DebugElement[];
  let page: Page;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppMaterialModule],
      declarations: [NavComponent]
    }).overrideComponent(NavComponent, {
      set: {
        providers: [
          {
            provide: LoginService, useClass: LoginServiceSpy
          }
        ]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLink));
    links = linkDes
      .map(de => de.injector.get(RouterLink) as RouterLink);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*  it('can get RouterLinks from template', () => {
    /!*expect(fixture.debugElement
      .queryAll(By.directive(RouterLink)).length).toBe(2, 'should have 2 links');*!/
  });

  it('should show logged in message', () => {

  });*/

  class LoginServiceSpy {
    isLoggedIn = jasmine.createSpy('login', LoginService).and.returnValue(Observable.of(User.from(userDummy)));
  }

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
