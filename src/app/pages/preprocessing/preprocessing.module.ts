import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreprocessingRoutingModule } from './preprocessing-routing.module';
import { PreprocessingComponent } from './preprocessing.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [PreprocessingComponent],
  imports: [
    CommonModule,
    PreprocessingRoutingModule,
    MaterialModule
  ]
})
export class PreprocessingModule { }
