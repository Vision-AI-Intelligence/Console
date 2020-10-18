import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MiscService } from '../../services/misc.service';
import { UserAuthentication } from 'src/app/services/user/auth.service';
import { CreateComponent } from '../../components/dialogs/create/create.component';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project/project.service';
import { DeleteprojectComponent } from './components/dialogs/deleteproject/deleteproject.component';
import { UpdateprojectComponent } from './components/dialogs/updateproject/updateproject.component';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
})
export class ProjectmanagementComponent implements OnInit {
  dialogWidth = '500px';
  proj: any;
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
  public data: any;
  menuContext = ['Open', 'Update', 'Delete'];
  selectedProject = '';
  public collaboratorInvitations = [];
  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.proj.id = params.id;
    });
    await this.onLoadProjects();
    await this.onLoadInvitations();
  }
  async onLoadProjects() {
    this.data = await this.projectService.GetProjects();
    console.log(this.data);
    console.log('token: ' + await this.userAuthentication.idToken);
    for (let i of this.data.projects) {
      this.projects.push(i);
    }
  }
  async onLoadInvitations() {
    let temp: any;
    temp = await this.userAuthentication.getInvitations();
    for (const t of temp['invitations']) {
      this.collaboratorInvitations.push(t);
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
  async onDelete(project: Project) {
    const dialogRef = this.dialog.open(DeleteprojectComponent, { width: this.dialogWidth, data: project });
    dialogRef.afterClosed().subscribe(async (data) => {
      // console.log(data);
      this.projectService.DeleteProject(data.id);
    });
  }
  async onUpdate(project: Project) {
    const dialogRef = this.dialog.open(UpdateprojectComponent, { width: this.dialogWidth, data: project });
    dialogRef.afterClosed().subscribe(async (data) => {
      console.log(data);
      await this.projectService.UpdateProject(data);
      this.miscService.showSnackbarSuccessful('Update');
    });
  }

  // async gotoEdit(proj) {
  //   await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  // }
  async gotoEdit(proj) {
    this.projectService.pid = proj.id;
    await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  }
  async onAccept(invitation: any) {
    console.log(invitation.project);
    console.log(invitation.id);
    await this.projectService.AcceptInvitation(invitation.project, invitation.id);
    this.miscService.showSnackbarSuccessful(`${invitation.to} accepted`);
  }
  onReject() {
    console.log('rejected');
  }
  async onClickMenuContext(menuContent, proj) {
    switch (menuContent) {
      case this.menuContext[0]:
        await this.gotoEdit(proj); break;
      case this.menuContext[1]:
        await this.onUpdate(proj); break;
      case this.menuContext[2]:
        await this.onDelete(proj); break;
    }
  }
}
