import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprojectRoutingModule } from './editproject-routing.module';
import { EditprojectComponent } from './editproject.component';

import { ResourcesComponent } from '../components/resources/resources.component';
import { BillingComponent } from '../components/billing/billing.component';
import { CollaborationComponent } from '../components/collaboration/collaboration.component';

@NgModule({
  declarations: [EditprojectComponent, ResourcesComponent, BillingComponent, CollaborationComponent],
  imports: [
    CommonModule,
    EditprojectRoutingModule
  ]
})
export class EditprojectModule { }
