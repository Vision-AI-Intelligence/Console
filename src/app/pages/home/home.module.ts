import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule
} from '@angular/material';
import { from } from 'rxjs';
@NgModule({
  declarations: [HomeComponent, ToolbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
