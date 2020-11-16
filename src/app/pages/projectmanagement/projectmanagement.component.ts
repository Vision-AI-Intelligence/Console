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
import { CookieService } from 'ngx-cookie-service';
import { timeInterval } from 'rxjs/operators';
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
    public miscService: MiscService,
    private cookieService: CookieService
  ) { }

  public projects = [];
  private dialogRef = null;
  public data: any;
  menuContext = ['Open', 'Update', 'Delete'];
  selectedProject = '';
  public collaboratorInvitations = [];
  async ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.projectService.pid = params.id;
    });
    await this.onLoadProjects();
    await this.onLoadInvitations();
    await this.hideSpinkit()
    this.unhideNoneSpinkit()

  }
  async onLoadProjects() {
    this.data = await this.projectService.getProjects();
    console.log('token: ' + await this.userAuthentication.idToken);

    let temp = await this.projectService.getProjectsCollaborated();

    while (this.projects.length != 0) {
      this.projects.pop();
    }
    for (let i of this.data.projects) {
      this.projects.push(i);
    }
    if (temp === undefined || temp['projects'] < 1) {
      return;
    }
    for (let j of temp['projects']) {
      this.projects.push(j);
    }
    // console.log(this.projects);

    // tslint:disable-next-line: no-unused-expression
    this.projectService.pInfo = this.projects;
    console.log(this.projectService.pInfo);
  }
  async onLoadInvitations() {
    let temp: any;
    temp = await this.userAuthentication.getInvitations();
    while (this.collaboratorInvitations.length != 0) {
      this.collaboratorInvitations.pop();
    }
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
    this.dialogRef.afterClosed().subscribe(async (data) => {
      if (data.id !== '' && data.id !== undefined
        && data.name !== '' && data.description !== '' && data !== '' && data !== undefined && data !== null) {
        const result = await this.projectService.createProject(data);
        if (result['message'] !== 'OK') {
          this.miscService.showSnackbarFail(`${data.id} created `);
          return;
        }
        this.projects.push(data);
        this.miscService.showSnackbarSuccessful(`${data.id} created `);
      }
    });
  }
  async onDelete(project: Project) {
    const dialogRef = this.dialog.open(DeleteprojectComponent, { width: this.dialogWidth, data: project });
    dialogRef.afterClosed().subscribe(async (data) => {
      // console.log(data);


      let result = await this.projectService.deleteProject(data.id);
      if (result['message'] !== 'OK') {
        this.miscService.showSnackbarFail(`${data.id} deleted `);
        return;
      }
      this.miscService.showSnackbarSuccessful(`${data.id} deleted `);
      await this.onLoadProjects();
    });
  }
  async onUpdate(project: Project) {
    const dialogRef = this.dialog.open(UpdateprojectComponent, { width: this.dialogWidth, data: project });
    dialogRef.afterClosed().subscribe(async (data) => {
      let result = await this.projectService.updateProject(data);
      if (result['message'] !== 'OK') {
        this.miscService.showSnackbarFail(`${data.id} updated `);
        return;
      }
      this.miscService.showSnackbarSuccessful(`${data.id} updated `);
      await this.onLoadProjects();
    });
  }

  // async gotoEdit(proj) {
  //   await this.router.navigate([`/editproject/${proj.id}/resources`], { relativeTo: this.activatedRoute });
  // }
  async gotoEdit(proj) {
    this.projectService.pid = proj.id;
    this.cookieService.set("project-id", proj.id);
    await this.router.navigate([`/editproject/${this.projectService.pid}/resources`], { relativeTo: this.activatedRoute });
  }
  async onAccept(invitation: any) {
    console.log(invitation.project);
    console.log(invitation.id);
    await this.projectService.acceptInvitation(invitation.project, invitation.id);
    this.miscService.showSnackbarSuccessful(`${invitation.to} accepted`);
    await this.onLoadInvitations();
    await this.onLoadProjects();
  }
  onReject(invitation: any) {
    this.projectService.deleteInvitation(invitation.project, invitation.id).then(
      async () => {
        this.miscService.showSnackbarSuccessful(`Rejected ${invitation.project}`);
        await this.onLoadInvitations();
      });
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

  async hideSpinkit(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000))

    let elem: HTMLElement = document.getElementById('myspinkit')
    elem.setAttribute("style", "display:none;")
  }
  unhideNoneSpinkit(): void {
    let elem: HTMLElement = document.getElementById('noneMyspinkit')
    elem.setAttribute("style", "display:block;")
  }
}
