import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtifactsComponent } from './artifacts.component';

const routes: Routes = [{ path: '', component: ArtifactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtifactsRoutingModule { }
