import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectmanagementComponent } from './projectmanagement.component';
import { EditprojectModule } from './editproject/editproject.module';
import { ResourcesComponent } from './components/resources/resources.component';
import { BillingComponent } from './components/billing/billing.component';
import { CollaborationComponent } from './components/collaboration/collaboration.component';
const routes: Routes = [
  {
    path: '', component: ProjectmanagementComponent, children: [
      {
        path: 'resources', component: ResourcesComponent
      },
      {
        path: 'billing', component: BillingComponent
      },
      {
        path: 'collaboration', component: CollaborationComponent
      }
    ],
  },
  // { path: 'editproject', loadChildren: () => import('./editproject/editproject.module').then(m => m.EditprojectModule) },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }
