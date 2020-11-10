import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aijobs',
  templateUrl: './aijobs.component.html',
  styleUrls: ['./aijobs.component.scss']
})
export class AijobsComponent implements OnInit {

  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  tabs = ['Running', 'Failed', 'Completed'];
  activeLink = this.tabs[0];
  ngOnInit(): void {
  }
  selectTab(tab: any) {
    console.log(tab);
    switch (tab) {
      case this.tabs[0]:
        this.activeLink = this.tabs[0];
        this.router.navigate([`./running`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.tabs[1]:
        this.activeLink = this.tabs[1];
        this.router.navigate([`./failed`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.tabs[2]:
        this.activeLink = this.tabs[2];
        this.router.navigate([`./completed`], {
          relativeTo: this.activatedRoute,
        });
        break;
    }
  }
}
