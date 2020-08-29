import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeldesignerComponent } from './modeldesigner.component';

const routes: Routes = [{ path: '', component: ModeldesignerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeldesignerRoutingModule { }
