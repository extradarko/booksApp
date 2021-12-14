//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

//Routes
import { AppRoutingModule } from './app-routing.module';

//Other Modules
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PrimeNgModule} from "./prime-ng/prime-ng.module";
import {BooksModule} from "./books/books.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    BooksModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
