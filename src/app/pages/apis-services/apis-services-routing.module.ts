import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisServicesComponent } from './apis-services.component';

const routes: Routes = [{ path: '', component: ApisServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApisServicesRoutingModule { }
