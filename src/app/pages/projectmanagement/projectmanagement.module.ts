import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';
import { MaterialModule } from '../../material.module';
import { ResourcesComponent } from './components/resources/resources.component';
import { CollaborationComponent } from './components/collaboration/collaboration.component';
import { BillingComponent } from './components/billing/billing.component';
import { EditprojectModule } from './editproject/editproject.module';
@NgModule({
  declarations: [ProjectmanagementComponent],
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule,
    MaterialModule,
    // EditprojectModule
  ]
})
export class ProjectmanagementModule { }
