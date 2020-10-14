import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataexchangeRoutingModule } from './dataexchange-routing.module';
import { DataexchangeComponent } from './dataexchange.component';
import {
  MaterialModule
} from '../../material.module';
import { DownloadurlComponent } from './components/dialogs/downloadurl/downloadurl.component';
@NgModule({
  declarations: [DataexchangeComponent, DownloadurlComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule,
    MaterialModule
  ]
})
export class DataexchangeModule { }
