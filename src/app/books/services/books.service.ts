import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl: string = 'https://api.itbook.store/1.0/search';

  constructor( private _httpClient: HttpClient ) { }

  getBooks(term: string, page: number): Observable<any> {

    const url = `${this.apiUrl}/${term}/${page}`
    return this._httpClient.get(url);

  }

}
