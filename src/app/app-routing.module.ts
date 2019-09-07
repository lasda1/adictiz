import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import { SearchBookComponent } from "./search-book/search-book.component";
import { SearchResultBooksComponent } from './search-result-books/search-result-books.component';
const routes: Routes = [
  {path: 'searchBook', component: SearchBookComponent},
  {path: 'books/:name', component: SearchResultBooksComponent},
  {path: '', redirectTo: '/searchBook', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
