import { ModalComponent } from './modal.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ModalComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalModule {

}
