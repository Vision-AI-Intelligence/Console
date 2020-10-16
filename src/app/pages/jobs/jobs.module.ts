import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { MaterialModule } from '../../material.module';
import { RunningComponent } from './components/running/running.component';
import { FailedComponent } from './components/failed/failed.component';
import { CompletedComponent } from './components/completed/completed.component';

@NgModule({
  declarations: [JobsComponent, RunningComponent, FailedComponent, CompletedComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule
  ]
})
export class JobsModule { }
