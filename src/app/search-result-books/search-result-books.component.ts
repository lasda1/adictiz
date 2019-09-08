import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookSearchApiService } from '../service/book-search-api.service';
import { Books } from '../model/Book';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BookDetailDialogComponent } from './book-detail-dialog/book-detail-dialog.component';
import {Location} from '@angular/common';

@Component({
  selector: 'Adz-search-result-books',
  templateUrl: './search-result-books.component.html',
  styles:['Adz-search-result-books {width:100%;}'],
  styleUrls: ['./search-result-books.component.scss']
})
export class SearchResultBooksComponent implements OnInit {

  name:string;
  bookList:Books[] =[]
  standardList:Books[] =[]
  totalBooks:number
  kind:string
  bookForm: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private api: BookSearchApiService,
    private router :Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _location: Location
  ) {
    this.name = this.route.snapshot.paramMap.get('name');
   }

  ngOnInit() {
    this.bookForm = this.fb.group({
      filterName : '',
      filterSelect: ''
    })
    console.log(this.name)
    this.getAllBooksByName(this.name);
    this.onFilterNameChange();
    this.onFilterSelectChange();
  }
  openDetailDialog(book): void {
    const dialogRef = this.dialog.open(BookDetailDialogComponent, {
      width: '600px',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  onFilterNameChange() {
    this.bookForm.controls.filterName.valueChanges.subscribe(filter => {
      const nameBookList = this.standardList.filter(book => book.volumeInfo.title.toLowerCase().includes(filter.toLowerCase()));
      const categoryBookList = this.standardList.filter(book => {
        let cat;
        if(book.volumeInfo.categories !== undefined && book.volumeInfo.categories.length != 0 ){
           cat = book.volumeInfo.categories.filter(category=>category.toLowerCase().includes(filter.toLowerCase()))
          if(cat.length == 0)
            return false;
          }
          if(cat !== undefined )
          {
            return book.volumeInfo.categories.indexOf(cat[0]) > -1
          }
      });
      const authorBookList = this.standardList.filter(book => {
        let author;
        if(book.volumeInfo.authors !== undefined && book.volumeInfo.authors.length != 0 ){
          author = book.volumeInfo.authors.filter(auth=>auth.toLowerCase().includes(filter.toLowerCase()))
          if(author.length == 0)
            return false;
          }
          if(author !== undefined )
          {
            return book.volumeInfo.authors.indexOf(author[0]) > -1
          }
      });
      const finalList=nameBookList.concat(categoryBookList).concat(authorBookList);
      //remove redendent
      /*this.bookList = finalList.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['title']).indexOf(obj['title']) === pos;
      });*/
      this.bookList=finalList;
      if(!filter) {
        this.getAllBooksByName(this.name);
      }
    })
  }
  onFilterSelectChange(){
    this.bookForm.controls.filterSelect.valueChanges.subscribe(filter => {
      if(filter)
        this.bookList=[filter]
      else
        this.getAllBooksByName(this.name)
    })


  }

  getAllBooksByName(name){
    this.api.getBooksByName(name).then(books=>{
      this.bookList=books.items;
      this.standardList=books.items;
      this.totalBooks=books.totalItems;
    })
  }


  backClicked() {
    this._location.back();
  }
  
  
}
