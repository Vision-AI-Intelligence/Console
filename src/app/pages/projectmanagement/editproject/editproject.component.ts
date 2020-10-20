import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-editproject",
  templateUrl: "./editproject.component.html",
  styleUrls: ["./editproject.component.scss"],
})
export class EditprojectComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  links = ["Resources", "Billing", "Collaboration"];
  activeLink = this.links[0];
  pid = "";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.pid = params.id;
    });
  }

  selectTab(tab: any) {
    console.log(tab);
    switch (tab) {
      case this.links[0]:
        this.activeLink = this.links[0];
        this.router.navigate([`./resources`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.links[1]:
        this.activeLink = this.links[1];
        this.router.navigate([`../${this.pid}/billing`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.links[2]:
        this.activeLink = this.links[2];
        this.router.navigate([`../${this.pid}/collaboration`], {
          relativeTo: this.activatedRoute,
        });
        break;
    }
  }
}
