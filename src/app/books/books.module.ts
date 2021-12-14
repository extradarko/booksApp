//Angular modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

//Extern modules
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {SharedModule} from "../shared/shared.module";

//Providers
import {DownloadService} from "./services/download.service";


//Components
import {SearchBooksComponent} from './pages/search-books/search-books.component';
import {BooksListComponent} from './components/books-list/books-list.component';


@NgModule({
  declarations: [
    SearchBooksComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    SearchBooksComponent,
    BooksListComponent,
  ],
  providers: [
    DownloadService
  ]
})
export class BooksModule {
}
