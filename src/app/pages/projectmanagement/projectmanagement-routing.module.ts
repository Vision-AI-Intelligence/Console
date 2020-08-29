import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectmanagementComponent } from './projectmanagement.component';

const routes: Routes = [{ path: '', component: ProjectmanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }
