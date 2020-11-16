import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeldesignerRoutingModule } from './modeldesigner-routing.module';
import { ModeldesignerComponent } from './modeldesigner.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [ModeldesignerComponent],
  imports: [
    CommonModule,
    ModeldesignerRoutingModule,
    MaterialModule
  ]
})
export class ModeldesignerModule { }
