import { TestBed } from '@angular/core/testing';

import { FreeimageService } from './freeimage.service';

describe('FreeimageService', () => {
  let service: FreeimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
