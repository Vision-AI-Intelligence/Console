import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminzoneComponent } from './adminzone.component';

const routes: Routes = [{ path: '', component: AdminzoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminzoneRoutingModule { }
