import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { MiscService } from 'src/app/services/misc.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { UserAuthentication } from '../../../../services/user/auth.service';
@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit, AfterViewInit {
  @ViewChild('input') searchInput: ElementRef;

  userInformation = [
    // {
    //   photoURL: '../../../../../assets/images/user.png',
    //   email: 'abc@gmail.com'
    // },
    // {
    //   photoURL: '../../../../../assets/images/user.png',
    //   email: 'lorem.ipsum@gmail.com'
    // },
    // {
    //   photoURL: '../../../../../assets/images/user.png',
    //   email: 'user01@gmail.com'
    // }
  ];
  pendingInvitation = [];
  collaborators = [];

  defaultElevation = 2;
  searchInputValue = '';
  suggestionUsers: any;

  constructor(
    private userService: UserAuthentication,
    private projectService: ProjectService,
    private miscService: MiscService
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
  }
  async onAddCollaborator() {
    try {
      let to = this.suggestionUsers.filter((value) => value.email === this.searchInputValue)[0];
      let createInvitation = await this.projectService.CreateInvitation(this.projectService.pid, this.userService.userDetails.uid, to.uid);
      if (createInvitation['message'] != 'OK') {
        this.miscService.showSnackbarFail(`Invite ${to.email}`);
        return;
      }
      this.getInvitations();
      this.miscService.showSnackbarSuccessful(`Collaborator ${to.email} was added`);
    } catch (err) {
      console.log(err);
    }
  }
  async getInvitations() {
    let getInvitation = await this.projectService.GetInvitation(this.projectService.pid);
    if (await getInvitation['result'].length != 0) {
      this.miscService.showSnackbarNotification('No invitations yet, please invite someone');
    }
    console.log(getInvitation['result']);
    // while (this.userInformation.length > 0) { //not good for performance => stupid solution -_-
    //   this.userInformation.pop();
    // }
    for (const i of getInvitation['result']) {
      let userInfo = await this.userService.getUserInfo(i.to);
      if ((this.userInformation.filter((usr) => usr.email === userInfo['email'])).length > 0) {
        continue;
      }
      this.userInformation.push({
        email: userInfo['email'],
        photoURL: userInfo['photoURL']
      });
    }

    console.log(this.userInformation);
  }
}
