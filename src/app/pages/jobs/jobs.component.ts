import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  tabs = ['Running', 'Failed', 'Completed'];
  ngOnInit(): void {
  }
  selectTab(tab: any) {
    console.log(tab);
    switch (tab) {
      case this.tabs[0]:
        this.router.navigate([`./running`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.tabs[1]:
        this.router.navigate([`./failed`], {
          relativeTo: this.activatedRoute,
        });
        break;
      case this.tabs[2]:
        this.router.navigate([`./completed`], {
          relativeTo: this.activatedRoute,
        });
        break;
    }
  }
}
