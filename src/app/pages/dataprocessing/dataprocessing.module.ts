import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataprocessingRoutingModule } from './dataprocessing-routing.module';
import { DataprocessingComponent } from './dataprocessing.component';
@NgModule({
  declarations: [DataprocessingComponent],
  imports: [
    CommonModule,
    DataprocessingRoutingModule,
  ]
})
export class DataprocessingModule { }
