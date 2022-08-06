import { TestBed } from '@angular/core/testing';

import { ReturnOrderServiceService } from './return-order-service.service';

describe('ReturnOrderServiceService', () => {
  let service: ReturnOrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnOrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
