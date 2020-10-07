import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './components/completed/completed.component';
import { FailedComponent } from './components/failed/failed.component';
import { RunningComponent } from './components/running/running.component';

import { JobsComponent } from './jobs.component';

const routes: Routes = [{
  path: '', component: JobsComponent,
  children: [
    {
      path: 'running',
      component: RunningComponent,
      pathMatch: 'full',
    },
    {
      path: 'failed',
      component: FailedComponent,
      pathMatch: 'full',
    },
    {
      path: 'completed',
      component: CompletedComponent,
    },
  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
