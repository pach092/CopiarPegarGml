import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrarRoutingModule } from './borrar-routing.module';
import { BorrarComponent } from './borrar.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';


@NgModule({
  declarations: [BorrarComponent],
  imports: [
    CommonModule,
    BorrarRoutingModule,
    DxDataGridModule,
    DxButtonModule
  ]
})
export class BorrarModule { }
