import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Books } from 'src/app/model/Book';

@Component({
  selector: 'Adz-book-detail-dialog',
  templateUrl: './book-detail-dialog.component.html',
  styleUrls: ['./book-detail-dialog.component.scss']
})
export class BookDetailDialogComponent implements OnInit {

  book:Books;
  constructor(
    public dialogRef: MatDialogRef<BookDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.book=data;
    }


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
