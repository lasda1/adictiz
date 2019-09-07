import { TestBed } from '@angular/core/testing';

import { BookSearchApiService } from './book-search-api.service';

describe('BookSearchApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookSearchApiService = TestBed.get(BookSearchApiService);
    expect(service).toBeTruthy();
  });
});
