import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AijobsRoutingModule } from './aijobs-routing.module';
import { AijobsComponent } from './aijobs.component';

import { MaterialModule } from '../../material.module';
import { RunningComponent } from './components/running/running.component';
import { FailedComponent } from './components/failed/failed.component';
import { CompletedComponent } from './components/completed/completed.component';


@NgModule({
  declarations: [AijobsComponent, RunningComponent, FailedComponent, CompletedComponent],
  imports: [
    CommonModule,
    AijobsRoutingModule,
    MaterialModule
  ]
})
export class AijobsModule { }
