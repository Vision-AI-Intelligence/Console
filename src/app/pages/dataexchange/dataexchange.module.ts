import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataexchangeRoutingModule } from './dataexchange-routing.module';
import { DataexchangeComponent } from './dataexchange.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import {
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatPaginatorModule,
  MatProgressBarModule
} from '@angular/material';
@NgModule({
  declarations: [DataexchangeComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule
  ]
})
export class DataexchangeModule { }
