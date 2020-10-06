import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "../app/pages/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { HomeModule } from "./pages/home/home.module";
import { DataprocessingModule } from "./pages/dataprocessing/dataprocessing.module";
import { ToolbarComponent } from "../app/components/toolbar/toolbar.component";
import { MaterialModule } from "./material.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DeleteComponent } from "./components/dialogs/delete/delete.component";
import { UpdateComponent } from "./components/dialogs/update/update.component";
import { CreateComponent } from "./components/dialogs/create/create.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HomeModule,
    DataprocessingModule,
    MaterialModule,
  ],
  entryComponents: [UpdateComponent, CreateComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
