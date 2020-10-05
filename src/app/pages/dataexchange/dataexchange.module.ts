import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataexchangeRoutingModule } from './dataexchange-routing.module';
import { DataexchangeComponent } from './dataexchange.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import {
  MaterialModule
} from '../../material.module';
@NgModule({
  declarations: [DataexchangeComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule,
    MaterialModule
  ]
})
export class DataexchangeModule { }
