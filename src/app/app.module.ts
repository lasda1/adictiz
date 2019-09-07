import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materials';

//components
import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';

//form 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//routes
import { AppRoutingModule } from './app-routing.module';
import { SearchResultBooksComponent } from './search-result-books/search-result-books.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    SearchResultBooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
