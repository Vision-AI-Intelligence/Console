import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataprocessingComponent } from './pages/dataprocessing/dataprocessing.component';
import { ProjectComponent } from './pages/project/project.component';
import { TrainingComponent } from './pages/training/training.component';
import { ServingComponent } from './pages/serving/serving.component';
import { ProjectmanagementComponent } from './pages/projectmanagement/projectmanagement.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', component: HomeComponent },
  { path: 'dataprocessing', loadChildren: () => import('./pages/dataprocessing/dataprocessing.module').then(m => m.DataprocessingModule) },
  // { path: 'dataprocessing', component: DataprocessingComponent },
  { path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) },
  // { path: 'project', component: ProjectComponent },
  { path: 'training', loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule) },
  // { path: 'training', component: TrainingComponent },
  { path: 'serving', loadChildren: () => import('./pages/serving/serving.module').then(m => m.ServingModule) },
  // { path: 'serving', component: ServingComponent },
  { path: 'configuration', loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'projectmanagement', loadChildren: () => import('./pages/projectmanagement/projectmanagement.module').then(m => m.ProjectmanagementModule) },
  // { path: 'projectmanagement', component: ProjectmanagementComponent },
  { path: 'dataexchange', loadChildren: () => import('./pages/dataexchange/dataexchange.module').then(m => m.DataexchangeModule) },
  { path: 'preprocessing', loadChildren: () => import('./pages/preprocessing/preprocessing.module').then(m => m.PreprocessingModule) },
  { path: 'aijobs', loadChildren: () => import('./pages/aijobs/aijobs.module').then(m => m.AijobsModule) },
  { path: 'modeldesigner', loadChildren: () => import('./pages/modeldesigner/modeldesigner.module').then(m => m.ModeldesignerModule) },
  { path: 'artifacts', loadChildren: () => import('./pages/artifacts/artifacts.module').then(m => m.ArtifactsModule) },
  { path: 'apis-services', loadChildren: () => import('./pages/apis-services/apis-services.module').then(m => m.ApisServicesModule) },
  { path: 'monitoring', loadChildren: () => import('./pages/monitoring/monitoring.module').then(m => m.MonitoringModule) },
  { path: 'setting', loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule) },
  { path: 'adminzone', loadChildren: () => import('./pages/adminzone/adminzone.module').then(m => m.AdminzoneModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
