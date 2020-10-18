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

  ngOnInit(): void {
  }
  async onAddCollaborator() {
    try {
      let to = this.suggestionUsers.filter((value) => value.email === this.searchInputValue)[0];
      await this.projectService.CreateInvitation(this.projectService.pid, this.userService.userDetails.uid, to.uid);
      this.userInformation.push(await this.projectService.GetCollaborators(this.projectService.pid));
      console.log(this.userInformation);
      this.miscService.showSnackbarSuccessful(`Collaborator ${to.email} was added`);
    } catch (err) {
      console.log(err);
    }
  }
}
