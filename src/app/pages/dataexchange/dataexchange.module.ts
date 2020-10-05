import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataexchangeRoutingModule } from "./dataexchange-routing.module";
import { DataexchangeComponent } from "./dataexchange.component";
import {
  MaterialModule
} from '../../material.module';
@NgModule({
  declarations: [DataexchangeComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule,
    MaterialModule
  ]
})
export class DataexchangeModule { }
