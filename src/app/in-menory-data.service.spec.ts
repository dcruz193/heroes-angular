import { TestBed } from '@angular/core/testing';

import { InMenoryDataService } from './in-menory-data.service';

describe('InMenoryDataService', () => {
  let service: InMenoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMenoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
