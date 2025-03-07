import { TestBed } from '@angular/core/testing';

import { CategoryCodeService } from './category-code.service';

describe('CategoryCodeService', () => {
  let service: CategoryCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
