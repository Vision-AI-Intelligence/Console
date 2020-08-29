import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldesignerRoutingModule } from './modeldesigner-routing.module';
import { ModeldesignerComponent } from './modeldesigner.component';


@NgModule({
  declarations: [ModeldesignerComponent],
  imports: [
    CommonModule,
    ModeldesignerRoutingModule
  ]
})
export class ModeldesignerModule { }
