import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServingComponent } from './serving.component';

const routes: Routes = [{ path: '', component: ServingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServingRoutingModule { }
