import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataprocessingComponent } from './dataprocessing.component';

const routes: Routes = [{ path: '', component: DataprocessingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataprocessingRoutingModule { }
