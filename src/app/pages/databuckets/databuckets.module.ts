import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabucketsRoutingModule } from './databuckets-routing.module';
import { DatabucketsComponent } from './databuckets.component';
import { MaterialModule } from '../../material.module';
import { CreatebucketComponent } from './components/dialogs/createbucket/createbucket.component';

@NgModule({
  declarations: [DatabucketsComponent, CreatebucketComponent],
  imports: [
    CommonModule,
    DatabucketsRoutingModule,
    MaterialModule
  ]
})
export class DatabucketsModule { }
