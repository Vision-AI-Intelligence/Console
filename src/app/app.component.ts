import { Component } from "@angular/core";
import { MiscService } from "./services/misc.service";
import {UserAuthentication} from './services/user/auth.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "finalGraduation";
  path = ["Project", "Create"];
  constructor(public miscService: MiscService, public authService:UserAuthentication) {
    this.path = miscService.breadcrum;
  }

  public getProjects(){
    return this.authService.projects;
  }
}
