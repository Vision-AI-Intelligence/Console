import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabucketsRoutingModule } from './databuckets-routing.module';
import { DatabucketsComponent } from './databuckets.component';


@NgModule({
  declarations: [DatabucketsComponent],
  imports: [
    CommonModule,
    DatabucketsRoutingModule
  ]
})
export class DatabucketsModule { }
