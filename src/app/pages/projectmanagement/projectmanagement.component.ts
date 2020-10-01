import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
})
export class ProjectmanagementComponent implements OnInit {

  constructor(private router: Router) { }

  public projects = [];

  ngOnInit(): void { }

  generateButton() {
    this.projects.push({ name: 'Project ' + this.projects.length, id: '' + this.projects.length });
  }
  async gotoEdit(proj) {
    await this.router.navigate(['/editproject/' + proj.id]);
  }
}
