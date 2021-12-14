//Angular modules
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Components
import {SearchBooksComponent} from "./books/pages/search-books/search-books.component";

const routes: Routes = [
  {
    path: '',
    component: SearchBooksComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
