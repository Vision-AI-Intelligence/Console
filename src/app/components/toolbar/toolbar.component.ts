import { Component, OnInit, Output, EventEmitter, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from 'src/app/services/user/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { ProjectmanagementComponent } from 'src/app/pages/projectmanagement/projectmanagement.component';
import { ProjectService } from 'src/app/services/project/project.service';
import { CookieService } from 'ngx-cookie-service';
import { MiscService } from 'src/app/services/misc.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() set projectList(proj: Array<any>) {
    console.log(proj);
    this.menuContext = [];
    for (let i = 0; i < proj.length; i++) {
      this.menuContext.push(proj[i].id);
    }
    //this.projectService.pInfo.map((i) => this.menuContext.push(i.id));
  }

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
    private cookieService: CookieService,
    public projectService: ProjectService,
    public miscService: MiscService
  ) {
    afAuth.user.subscribe(usr => this.userDetails = usr);
    // if (this.projectManagement.data !== undefined) {
    //   this.menuContext = this.projectManagement.data;

    //   console.log(this.menuContext);
    // }
  }
  ngOnInit() {
    // this.getProjectId();
    let projectId = this.cookieService.get("project-id");
    this.selectedProject = projectId == "" ? "Select a project" : projectId;
  }

  onSidenavToggle() {
    this.SidenavToggle.emit();
  }
  onClickMenuContext(menuContent) {
    this.selectedProject = menuContent;
    this.cookieService.set("project-id", menuContent);
    window.location.reload();
  }
  getProjectId() {
    if (this.projectService.pInfo === undefined || this.projectService.pInfo === null) {
      setTimeout(
        async () => {
          console.log(this.projectService.pInfo);
          // await this.projectService.pInfo.map((i) => this.menuContext.push(i.id));
        }, 5000
      );
    }
  }
}
