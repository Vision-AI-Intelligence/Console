import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreprocessingRoutingModule } from './preprocessing-routing.module';
import { PreprocessingComponent } from './preprocessing.component';
import { MaterialModule } from '../../material.module';

import {BucketOptionsComponent} from './components/dialog/bucket-options/bucket-options.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [PreprocessingComponent, BucketOptionsComponent],
  imports: [
    CommonModule,
    PreprocessingRoutingModule,
    MaterialModule
  ]
})
export class PreprocessingModule { }
