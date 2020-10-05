import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MiscService } from "src/app/services/misc.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();
  constructor(private miscService: MiscService) {}

  ngOnInit(): void {}

  onToggleClose(path) {
    this.closeSidenav.emit();
    this.miscService.breadcrum = path;
  }
}
