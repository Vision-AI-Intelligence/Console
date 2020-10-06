import { Component } from "@angular/core";
import { MiscService } from "./services/misc.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "finalGraduation";
  path = ["Project", "Create"];
  constructor(public miscService: MiscService) {
    this.path = miscService.breadcrum;
  }
}
