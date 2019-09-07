import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'Adz-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  bookSearchInput = new FormControl('', [
    Validators.required, 
  ]);
  onBookChange() {
    console.log(this.bookSearchInput.value);
  } 
}
