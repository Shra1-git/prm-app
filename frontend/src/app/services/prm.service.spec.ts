import { TestBed } from '@angular/core/testing';

import { PrmService } from './prm.service';

describe('PrmService', () => {
  let service: PrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
