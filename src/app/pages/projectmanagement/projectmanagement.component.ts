import {
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { CreateComponent } from 'src/app/components/dialogs/create/create.component';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project/project.service';
@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
})
export class ProjectmanagementComponent implements OnInit {
  dialogWidth = '500px';
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private projectService: ProjectService,
  ) { }

  public projects = [];

  ngOnInit(): void { }

  // generateButton() {
  //   this.projects.push({ name: 'Project ' + this.projects.length, id: '' + this.projects.length });
  // }
  async onCreate() {
    const inputData = {
      pid: '000',
      name: '000',
      description: '000'
    };
    const dialogRef = this.dialog.open(CreateComponent, { width: this.dialogWidth, hasBackdrop: true, data: inputData });
    dialogRef.afterClosed().subscribe((data) => {
      this.projectService.createProject(data);
      this.projects.push(data);
      console.log(this.projects);
    });
  }
  async gotoEdit(proj) {
    await this.router.navigate(['/editproject/' + proj.pid]);
  }
}
