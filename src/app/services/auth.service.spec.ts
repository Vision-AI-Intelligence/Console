import { TestBed } from '@angular/core/testing';

import { UserAuthentication } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: UserAuthentication = TestBed.get(UserAuthentication);
    expect(service).toBeTruthy();
  });
});
