import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServingRoutingModule } from './serving-routing.module';
import { ServingComponent } from './serving.component';


@NgModule({
  declarations: [ServingComponent],
  imports: [
    CommonModule,
    ServingRoutingModule
  ]
})
export class ServingModule { }
