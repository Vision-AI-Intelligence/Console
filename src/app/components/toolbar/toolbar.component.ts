import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from 'src/app/services/user/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { ProjectmanagementComponent } from 'src/app/pages/projectmanagement/projectmanagement.component';
import { ProjectService } from 'src/app/services/project/project.service';
import { MiscService } from 'src/app/services/misc.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // panelOpenState = false;
  userDetails: User = null;
  @Output() SidenavToggle = new EventEmitter();

  menuContext = [];
  selectedProject = 'Selected a project';
  constructor(
    public userAuth: UserAuthentication,
    private router: Router,
    private afAuth: AngularFireAuth,
    private projectManagement: ProjectmanagementComponent,
    public projectService: ProjectService,
    public miscService: MiscService
  ) {
    afAuth.user.subscribe(usr => this.userDetails = usr);
    // if (this.projectManagement.data !== undefined) {
    //   this.menuContext = this.projectManagement.data;

    //   console.log(this.menuContext);
    // }
  }
  async ngOnInit() {
    this.getProjectId();
  }

  onSidenavToggle() {
    this.SidenavToggle.emit();
  }
  onClickMenuContext(menuContent) {
    for (let i of this.menuContext) {
      if (i === menuContent) {
        this.selectedProject = i;
        this.projectService.pid = i;
        console.log(`${i} clicked!`);
        console.log(this.projectService.pid);
      }
    }
  }
  async getProjectId() {
    if (this.projectService.pInfo === undefined || this.projectService.pInfo === null) {
      setTimeout(
        async () => {
          await this.projectService.pInfo.map((i) => this.menuContext.push(i.id));
        }, 5000
      );
    }
  }
}
