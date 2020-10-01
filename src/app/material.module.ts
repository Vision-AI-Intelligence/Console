import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDividerModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
