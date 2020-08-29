import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreprocessingRoutingModule } from './preprocessing-routing.module';
import { PreprocessingComponent } from './preprocessing.component';


@NgModule({
  declarations: [PreprocessingComponent],
  imports: [
    CommonModule,
    PreprocessingRoutingModule
  ]
})
export class PreprocessingModule { }
