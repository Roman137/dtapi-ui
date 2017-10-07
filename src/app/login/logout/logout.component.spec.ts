import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoutComponent} from './logout.component';
import {User} from '../services/entities/user';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
import {LoginModule} from '../login.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  const user: User = new User('1', 'user', ['logged', 'user']);

  class LoginServiceSpy {
    logout = jasmine.createSpy('login').and.callFake(
      () => Observable.of(user)
    );
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule, RouterTestingModule],
      providers: [LoginService]
    })
      .overrideComponent(LogoutComponent, {
        set: {
          providers: [
            {provide: LoginService, useClass: LoginServiceSpy}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
