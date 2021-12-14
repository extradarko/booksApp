import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    //Se añade el modal al array de modales activos
    this.modals.push(modal);
  }

  remove(id: string) {
    // Se elimina el modal del array de modales activos
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    // Se abre el modal con el id que se recibe
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  close(id: string) {
    // Se cierra el modal con el id que se recibe
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }
}
