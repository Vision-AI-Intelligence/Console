import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprojectComponent } from './editproject.component';
import { ResourcesComponent } from '../components/resources/resources.component';
import { BillingComponent } from '../components/billing/billing.component';
import { CollaborationComponent } from '../components/collaboration/collaboration.component';

const routes: Routes = [{
  path: ':id', component: EditprojectComponent, children: [
    {
      path: 'resources', component: ResourcesComponent,
      // pathMatch: 'full'
    },
    {
      path: 'billing', component: BillingComponent,
      // pathMatch: 'full'
    },
    {
      path: 'collaboration', component: CollaborationComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditprojectRoutingModule { }
