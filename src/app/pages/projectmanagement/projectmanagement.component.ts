import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthentication } from 'src/app/services/user/auth.service';
import { CreateComponent } from '../../components/dialogs/create/create.component';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project/project.service';
@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
})
export class ProjectmanagementComponent implements OnInit {
  dialogWidth = '500px';
  id = '';
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private userAuthentication: UserAuthentication
  ) { }

  public projects = [];
  private dialogRef = null;
  private data: any;
  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
    this.data = await this.projectService.GetProjects();
    console.log(this.data);
    for (let i in this.data["projects"]) {
      this.projects.push(this.data["projects"][i]);
    }
    console.log(this.projects);
  }

  // generateButton() {
  //   this.projects.push({ name: 'Project ' + this.projects.length, id: '' + this.projects.length });
  // }
  async onCreate() {
    const inputData = {
      id: '',
      name: '',
      description: '',
    };

    this.dialogRef = this.dialog.open(CreateComponent, {
      width: this.dialogWidth,
      hasBackdrop: true,
      data: inputData,
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data.id !== '' && data.id !== undefined
        && data.name !== '' && data.description !== '' && data !== '' && data !== undefined && data !== null) {
        this.projectService.CreateProject(data);
        this.projects.push(data);
        console.log(this.projects);
      }
    });
  }
  getSubstring(originalString: string) {
    if (originalString.length > 14) {
      return originalString.substr(0, 10) + '...';
    }
    return originalString;
  }
  async gotoEdit(proj) {
    await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  }
  onAccept() {
    console.log('accepted');
  }
  onReject() {
    console.log('rejected');
  }
}
