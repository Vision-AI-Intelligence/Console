import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';

@NgModule({
  declarations: [ProjectmanagementComponent],
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule
  ]
})
export class ProjectmanagementModule { }
