import {Component, OnInit} from '@angular/core';
import {BooksDTO} from "../../models/BooksDTO";
import {BooksService} from "../../services/books.service";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {ModalService} from "../../services/modal.service";
import {DownloadService} from "../../services/download.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['books-list.component.css']
})
export class BooksListComponent implements OnInit {

  debouncer: Subject<string> = new Subject<string>();

  booksArr: BooksDTO[] = [];
  searchTerm: string = '';
  submitted: boolean = false;

  totalRecords: number = 0;
  loading: boolean = false;
  rows: number = 10;
  page: number = 1;

  bookImg?: string = ''
  bookTitle: string = ''

  bodyText: string = '';

  constructor(
    private _booksService: BooksService,
    private _modalService: ModalService,
    private _downloadService: DownloadService) {
  }

  ngOnInit() {

    //Se crea un debounceTime para que la búsqueda tenga un retraso de 0.5 seg.
    this.debouncer.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.searchBoocks(value);
    });
  }

  //Función que detecta cada vez que se presiona una tecla en el filtro de búsqueda.
  keyPressed() {
    this.debouncer.next(this.searchTerm);
  }

  searchBoocks(term: string) {
    this.getBooksData(term, true);
  }

  getBooksData(term: string, fromSearch: boolean) {
    this.page = 1;
    this._booksService.getBooks(term, this.page).subscribe(res => {
      this.submitted = true;
      this.booksArr = res.books
      this.totalRecords = res.total;
    }, error => {
      console.error('Error al obtener los libros',error);
    })
  }

//Función que detecta la página actual de la tabla y consume el servicio en modo lazy load.
  loadBooks($event: any) {
    console.log('entrando', $event);
    this.loading = true;
    if ($event.first.toString().length < 3 && this.searchTerm.length > 0) {
      const actualPage = $event.first.toString()[0];
      this.page = Number(actualPage) + 1;
      console.log('pagina actual', $event);
    }

    setTimeout(() => {
      this._booksService.getBooks(this.searchTerm, this.page).subscribe(res => {
        this.booksArr = res.books;
        this.loading = false;
      })
    }, 1000);
  }

  //Funciones para interactuar con el popup (modal) =======================================================

  getBookImg(book: BooksDTO) {
    this.bookTitle = book.title;
    this.bookImg = book.image;
    this.openModal('view-img');
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this.bookTitle = '';
    this.bookImg = '';
    this._modalService.close(id);
  }

  //Funciones para descargar la lista de libros en formato csv ================================================

  getBookList() {
    this._downloadService.downloadFile(this.booksArr, 'booksList');
  }

}
