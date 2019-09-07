import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultBooksComponent } from './search-result-books.component';

describe('SearchResultBooksComponent', () => {
  let component: SearchResultBooksComponent;
  let fixture: ComponentFixture<SearchResultBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
