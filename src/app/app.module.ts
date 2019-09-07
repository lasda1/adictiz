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
 
//routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
