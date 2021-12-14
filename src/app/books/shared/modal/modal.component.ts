import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() id: string = '';
  private element: any;

  constructor(private _modalService: ModalService, private _el: ElementRef) {
    this.element = _el.nativeElement;
  }

  ngOnInit(): void {
    //Validamos que haya un id a la hora de abrir el modal.
    if (!this.id) {
      console.error('El modal debe tener un id');
      return;
    }

    document.body.appendChild(this.element);

    //Método que cierra el modal al hacer clic en el fondo del popup.
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    //añadimos la instancia del modal al modalService para que sea accesible desde los controladores.
    this._modalService.add(this);
  }

  // Eliminamos la instancia del modal del propio modalService al destruir el componente.
  ngOnDestroy(): void {
    this._modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

}
