/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService]
    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
