import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove() {
    // remove modal from array of active modals
    this.modals.pop();
  }

  open() {
    this.modals[0].open();
  }

  close() {
    this.modals[0].close();
  }
}
