import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateprojectComponent implements OnInit {
  constructor(
    public projectService: ProjectService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateprojectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  ngOnInit() {
  }
  onSave() {
    this.dialogRef.close(this.data);
  }

}
