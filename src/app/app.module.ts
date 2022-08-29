import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app.routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';

@NgModule({
  imports: [BrowserModule, FormsModule, ModalModule, AppRoutingModule, MatOptionModule
    ,MatSelectModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
