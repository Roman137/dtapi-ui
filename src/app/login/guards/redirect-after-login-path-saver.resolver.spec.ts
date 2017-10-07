import {inject, TestBed} from '@angular/core/testing';

import {RedirectAfterLoginPathSaverResolver} from './redirect-after-login-path-saver.resolver';
import {LoginService} from '../services/login.service';


const loginServiceStub = {
  redirectAfterLogin: null
};

describe('RedirectAfterLoginPathSaverResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectAfterLoginPathSaverResolver,
        {provide: LoginService, useValue: loginServiceStub}
      ]
    });
  });

  it('should ...', inject([RedirectAfterLoginPathSaverResolver], (guard: RedirectAfterLoginPathSaverResolver) => {
    expect(guard).toBeTruthy();
  }));
});
