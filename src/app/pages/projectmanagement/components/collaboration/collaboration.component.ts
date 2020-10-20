import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { MiscService } from 'src/app/services/misc.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { UserAuthentication } from '../../../../services/user/auth.service';
import { DeleteprojectComponent } from '../dialogs/deleteproject/deleteproject.component';
@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit, AfterViewInit {
  @ViewChild('input') searchInput: ElementRef;

  userInformation = [];
  pendingInvitation = [];
  collaborators = [];

  defaultElevation = 2;
  searchInputValue = '';
  suggestionUsers: any;
  dialogWidth: '500px';

  constructor(
    private userService: UserAuthentication,
    private projectService: ProjectService,
    private miscService: MiscService,
    public dialog: MatDialog,
  ) { }

  async ngAfterViewInit() {

    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event) => event), debounceTime(200),
    )
      .subscribe(async (ev) => {
        console.log('Ev: ' + ev);
        console.log('Search input: ' + this.searchInputValue);
        if (this.searchInputValue.trim() === '') {
          return;
        }
        this.suggestionUsers = await this.userService.searchUser(this.searchInputValue);
        this.suggestionUsers = this.suggestionUsers.result;
        console.log(this.suggestionUsers);
      });


  }

  async ngOnInit() {
    this.getInvitations();
    this.getCollaborators();
  }
  async onAddCollaborator() {
    try {
      let to = this.suggestionUsers.filter((value) => value.email === this.searchInputValue)[0];
      let createInvitation = await this.projectService.CreateInvitation(this.projectService.pid, this.userService.uid, to.uid);
      if (createInvitation['message'] != 'OK') {
        this.miscService.showSnackbarFail(`Invite ${to.email}`);
        return;
      }
      await this.getInvitations();
      this.miscService.showSnackbarSuccessful(`Collaborator ${to.email} was added`);
    } catch (err) {
      console.log(err);
    }
  }
  async getInvitations() {
    let getInvitation = await this.projectService.GetInvitation(this.projectService.pid);
    if (await getInvitation['result'].length === 0) {
      this.miscService.showSnackbarNotification('No invitations yet, please invite someone');
    }
    for (const i of getInvitation['result']) {
      let userInfo = await this.userService.getUserInfo(i.to);
      if ((this.pendingInvitation.filter((usr) => usr.email === userInfo['email'])).length > 0) {
        continue;
      }
      this.pendingInvitation.push({
        uid: userInfo['uid'],
        invitationId: i['id'],
        email: userInfo['email'],
        photoURL: userInfo['photoURL']
      });
    }
    console.log(this.pendingInvitation);
  }
  async onRemoveInvitation(invitationId: string) {
    const dialogRef = this.dialog.open(DeleteprojectComponent, { width: this.dialogWidth, data: invitationId });
    dialogRef.afterClosed().subscribe(async (data) => {
      await this.projectService.DeleteInvitation(this.projectService.pid, data);
      this.miscService.showSnackbarSuccessful(`Deleted ${invitationId}`);
      await this.getInvitations(); // it still doesn't work
    });
  }
  async getCollaborators() {
    let temp: any;
    temp = await this.projectService.GetCollaborators(this.projectService.pid);
    if (temp === undefined || temp === null || temp.collaborators.length === 0) {
      this.miscService.showSnackbarNotification(`${this.projectService.pid} does not have any collaborators`);
    }
    for (let c of temp.collaborators) {
      let userInfo = await this.userService.getUserInfo(c);
      this.collaborators.push({
        uid: userInfo['uid'],
        email: userInfo['email'],
        photoURL: userInfo['photoURL']
      });
    }
  }
  async onRemoveCollaborator(collabInfo: any) {
    const dialogRef = this.dialog.open(DeleteprojectComponent, { width: this.dialogWidth, data: collabInfo });
    dialogRef.afterClosed().subscribe(async (data) => {
      this.projectService.DeleteCollaborators(this.projectService.pid, data.uid)
        .then(() => this.miscService.showSnackbarSuccessful(`Removed ${data.uid}`));
    });
  }
}
