import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  dataTable: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataTable.push(
      {num: 1},{num: 2},{num: 3},{num: 4},{num: 5},{num: 1},{num: 8},{num: 8},{num: 1},{num: 1},{num: 11},
    );
  }

}
