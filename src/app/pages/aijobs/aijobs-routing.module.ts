import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AijobsComponent } from './aijobs.component';

const routes: Routes = [{ path: '', component: AijobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AijobsRoutingModule { }
