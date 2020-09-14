import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';
import { MaterialModule } from '../../material.module';
@NgModule({
  declarations: [ProjectmanagementComponent],
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule,
    MaterialModule
  ]
})
export class ProjectmanagementModule { }
