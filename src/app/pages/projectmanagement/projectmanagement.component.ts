import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-projectmanagement",
  templateUrl: "./projectmanagement.component.html",
  styleUrls: ["./projectmanagement.component.scss"],
})
export class ProjectmanagementComponent implements OnInit {
  @ViewChild("buttonsContainer", { static: true }) buttonsContainer: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  public projects = [];

  generateButton() {
    this.projects.push({ name: "Project " + this.projects.length });
  }
}
