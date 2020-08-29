import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminzoneRoutingModule } from './adminzone-routing.module';
import { AdminzoneComponent } from './adminzone.component';


@NgModule({
  declarations: [AdminzoneComponent],
  imports: [
    CommonModule,
    AdminzoneRoutingModule
  ]
})
export class AdminzoneModule { }
