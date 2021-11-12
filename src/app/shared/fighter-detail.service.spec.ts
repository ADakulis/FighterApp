import { TestBed } from '@angular/core/testing';

import { FighterDetailService } from './fighter-detail.service';

describe('FighterDetailService', () => {
  let service: FighterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FighterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
