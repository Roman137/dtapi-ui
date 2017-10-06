import {inject, TestBed} from '@angular/core/testing';

import {RedirectAfterLoginPathSaverGuard} from './redirect-after-login-path-saver.guard';

describe('RedirectAfterLoginPathSaverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectAfterLoginPathSaverGuard]
    });
  });

  it('should ...', inject([RedirectAfterLoginPathSaverGuard], (guard: RedirectAfterLoginPathSaverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
