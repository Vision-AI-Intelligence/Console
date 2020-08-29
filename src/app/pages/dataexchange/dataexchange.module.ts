import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataexchangeRoutingModule } from './dataexchange-routing.module';
import { DataexchangeComponent } from './dataexchange.component';


@NgModule({
  declarations: [DataexchangeComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule
  ]
})
export class DataexchangeModule { }
