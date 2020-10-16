import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';
import { MaterialModule } from '../../material.module';
import { UpdateprojectComponent } from './components/dialogs/updateproject/updateproject.component';
import { DeleteprojectComponent } from './components/dialogs/deleteproject/deleteproject.component';
@NgModule({
  declarations: [ProjectmanagementComponent, UpdateprojectComponent, DeleteprojectComponent],
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule,
    MaterialModule,
  ]
})
export class ProjectmanagementModule { }
