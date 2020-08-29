import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataexchangeComponent } from './dataexchange.component';

const routes: Routes = [{ path: '', component: DataexchangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataexchangeRoutingModule { }
