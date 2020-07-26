import { TestBed } from '@angular/core/testing';

import { GetComercesService } from './get-comerces.service';

describe('GetComercesService', () => {
  let service: GetComercesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetComercesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
