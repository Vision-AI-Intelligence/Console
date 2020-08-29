import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreprocessingComponent } from './preprocessing.component';

const routes: Routes = [{ path: '', component: PreprocessingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreprocessingRoutingModule { }
