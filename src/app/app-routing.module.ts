import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../app/pages/notfound/notfound.component';
import { AuthenticationGuard } from '../app/guards/authentication.guard';
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {
    path: 'dataprocessing', loadChildren: () => import('./pages/dataprocessing/dataprocessing.module').then(m => m.DataprocessingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'training', loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'serving', loadChildren: () => import('./pages/serving/serving.module').then(m => m.ServingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'configuration', loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule),
    canActivate: [AuthenticationGuard]
  },
  // tslint:disable-next-line: max-line-length
  {
    path: 'projectmanagement', loadChildren: () => import('./pages/projectmanagement/projectmanagement.module').then(m => m.ProjectmanagementModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'dataexchange', loadChildren: () => import('./pages/dataexchange/dataexchange.module').then(m => m.DataexchangeModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'preprocessing', loadChildren: () => import('./pages/preprocessing/preprocessing.module').then(m => m.PreprocessingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'aijobs', loadChildren: () => import('./pages/aijobs/aijobs.module').then(m => m.AijobsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'modeldesigner', loadChildren: () => import('./pages/modeldesigner/modeldesigner.module').then(m => m.ModeldesignerModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'artifacts', loadChildren: () => import('./pages/artifacts/artifacts.module').then(m => m.ArtifactsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'apis-services', loadChildren: () => import('./pages/apis-services/apis-services.module').then(m => m.ApisServicesModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'monitoring', loadChildren: () => import('./pages/monitoring/monitoring.module').then(m => m.MonitoringModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'setting', loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'adminzone', loadChildren: () => import('./pages/adminzone/adminzone.module').then(m => m.AdminzoneModule),
    canActivate: [AuthenticationGuard]
  },
  { path: '404', component: NotfoundComponent },
  // tslint:disable-next-line: max-line-length
  {
    path: 'editproject', loadChildren: () => import('./pages/projectmanagement/editproject/editproject.module').then(m => m.EditprojectModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'databuckets', loadChildren: () => import('./pages/databuckets/databuckets.module').then(m => m.DatabucketsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'jobs', loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule),
    canActivate: [AuthenticationGuard]
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
