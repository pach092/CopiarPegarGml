import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarComponent } from './borrar.component';

const routes: Routes = [{ path: '', component: BorrarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrarRoutingModule { }
