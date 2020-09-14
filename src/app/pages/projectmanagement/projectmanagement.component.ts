import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
})
export class ProjectmanagementComponent implements OnInit {

  constructor() { }

  public projects = [];

  ngOnInit(): void { }

  generateButton() {
    this.projects.push({ name: 'Project ' + this.projects.length });
  }
}
