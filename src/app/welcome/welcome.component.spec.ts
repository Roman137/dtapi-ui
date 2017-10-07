import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {LoginService} from '../login/services/login.service';
import {User} from '../login/services/entities/user';
import {WelcomePipe} from './welcome.pipe';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';


const loginServiceStub = {
  user: new User('1', 'user', ['logged', 'admin'])
};

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let compiled: any;

  const welcomeMessage = new WelcomePipe().transform('Welcome, ', loginServiceStub.user.username) + '!';

  beforeEach(async(() => {
    TestBed.overrideProvider(LoginService, {useValue: loginServiceStub});

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule] // providers: [{provide: LoginService, useValue: loginServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a p tag', async(() => {
    expect(compiled.querySelector('p').textContent).toContain(welcomeMessage);
  }));
});
