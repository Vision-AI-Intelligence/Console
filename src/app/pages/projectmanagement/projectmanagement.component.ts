import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MiscService } from '../../services/misc.service';
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
    private userAuthentication: UserAuthentication,
    public miscService: MiscService
  ) { }

  public projects = [];
  private dialogRef = null;
  private data: any;
  menuContext = ['Open', 'Update', 'Delete'];
  selectedProject = '';
  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
    this.data = await this.projectService.GetProjects();
    console.log(this.data);
    console.log('token: ' + await this.userAuthentication.idToken);
    for (let i of this.data.projects) {
      this.projects.push(i);
    }
  }
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

  // async gotoEdit(proj) {
  //   await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  // }
  async gotoEdit(proj) {
    await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  }
  onAccept() {
    console.log('accepted');
  }
  onReject() {
    console.log('rejected');
  }
  async onClickMenuContext(menuContent, proj) {
    switch (menuContent) {
      case this.menuContext[0]:
        await this.gotoEdit(proj); break;
      case this.menuContext[1]:
        this.selectedProject = String(menuContent);
        console.log(menuContent + ' clicked!'); break;
      case this.menuContext[2]:
        this.selectedProject = String(menuContent);
        console.log(menuContent + ' clicked!'); break;
    }
  }
}
