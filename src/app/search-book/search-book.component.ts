import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Books } from '../model/Book';
import { BookSearchApiService } from '../service/book-search-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'Adz-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  bookList:Books[] =[]
  totalBooks:number
  kind:string
  constructor(private api:BookSearchApiService,private router :Router) { }

  ngOnInit() {
  }
  bookSearchInput = new FormControl('', [
    Validators.required, 
  ]);
  getAllBooksByName(name){
    this.api.getBooksByName(name).then(books=>{
      this.bookList=books.items;
      this.totalBooks=books.totalItems;
      console.log(this.bookList)
    })
  }
  onBookChange() {
    this.router.navigate(['/books/', this.bookSearchInput.value]);
  } 
}
