import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {promise} from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class BookSearchApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http :HttpClient) { }
  


  getBooksByName(name:string):Promise<any>{
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+name,this.httpOptions).toPromise();
  }
}
