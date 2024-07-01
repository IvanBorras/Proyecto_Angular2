import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAdminGuard } from './admin.guard';

describe('adminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
