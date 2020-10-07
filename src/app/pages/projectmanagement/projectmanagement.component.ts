import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
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
  pid = '';
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) { }

  public projects = [];
  private dialogRef = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.pid = params.id;
    });
  }

  // generateButton() {
  //   this.projects.push({ name: 'Project ' + this.projects.length, id: '' + this.projects.length });
  // }
  async onCreate() {
    const inputData = {
      pid: '',
      name: '',
      description: '',
    };

    this.dialogRef = this.dialog.open(CreateComponent, {
      width: this.dialogWidth,
      hasBackdrop: true,
      data: inputData,
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data.pid !== '' && data.pid !== undefined
        && data.name !== '' && data.description !== '' && data !== '' && data !== undefined && data !== null) {
        this.projectService.createProject(data);
        this.projects.push(data);
        console.log(this.projects);
      }
    });
  }
  getSubstring(originalString: string) {
    if (originalString.length > 15) {
      return originalString.substr(0, 10) + '...';
    }
    return originalString;
  }
  async gotoEdit(proj) {
    await this.router.navigate([`/editproject/${proj.pid}/resources`], { relativeTo: this.activatedRoute });
  }
  onAccept() {
    console.log('accepted');
  }
  onReject() {
    console.log('rejected');
  }
}
