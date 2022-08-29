import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  bodyText: string;
  selectedQues = '';
  q = [];
  o = [];
  ques = '';
  opt = [];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal() {
    this.modalService.open();
  }

  closeModal() {
    this.q.push(this.ques);
    this.o.push(this.opt);
    console.log(this.selectedQues);
    this.modalService.close();
  }
}
