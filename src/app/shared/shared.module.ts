//Angular modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

//Extern modules
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {ModalComponent} from "../books/shared/modal/modal.component";

//Components


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule {
}
