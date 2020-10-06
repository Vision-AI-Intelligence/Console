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
  MatTabsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule
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
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialModule { }
