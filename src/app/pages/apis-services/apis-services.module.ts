import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApisServicesRoutingModule } from './apis-services-routing.module';
import { ApisServicesComponent } from './apis-services.component';


@NgModule({
  declarations: [ApisServicesComponent],
  imports: [
    CommonModule,
    ApisServicesRoutingModule
  ]
})
export class ApisServicesModule { }
