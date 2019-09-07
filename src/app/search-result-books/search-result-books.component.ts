import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Adz-search-result-books',
  templateUrl: './search-result-books.component.html',
  styleUrls: ['./search-result-books.component.scss']
})
export class SearchResultBooksComponent implements OnInit {

  name:string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getResearchName();
    console.log(this.name)
  }
  getResearchName() {
    this.name = this.route.snapshot.paramMap.get('name');
  }


}
