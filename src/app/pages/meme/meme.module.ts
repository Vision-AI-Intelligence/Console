import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeRoutingModule } from './meme-routing.module';
import { MemeComponent } from './meme.component';

// import { NgSpinKitModule } from 'ng-spin-kit'
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MemeComponent],
  imports: [
    CommonModule,
    MemeRoutingModule,
    // BrowserModule,
    // NgSpinKitModule
  ]
})
export class MemeModule { }
