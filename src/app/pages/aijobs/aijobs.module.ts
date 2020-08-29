import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AijobsRoutingModule } from './aijobs-routing.module';
import { AijobsComponent } from './aijobs.component';


@NgModule({
  declarations: [AijobsComponent],
  imports: [
    CommonModule,
    AijobsRoutingModule
  ]
})
export class AijobsModule { }
