import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataexchangeRoutingModule } from "./dataexchange-routing.module";
import { DataexchangeComponent } from "./dataexchange.component";
import {
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatPaginatorModule,
  MatProgressBarModule,
} from "@angular/material";
import { AppModule } from "src/app/app.module";
@NgModule({
  declarations: [DataexchangeComponent],
  imports: [
    CommonModule,
    DataexchangeRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
})
export class DataexchangeModule {}
