import { TestBed } from '@angular/core/testing';

import { UcetService } from './ucet.service';

describe('UcetService', () => {
  let service: UcetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
