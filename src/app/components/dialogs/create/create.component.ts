import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../../../models/project.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  title = 'Create a new project';
  value = 'Clear me';
  input: '';
  constructor(
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  ngOnInit(): void { }
  onCreate() {
    this.dialogRef.close(this.data);
  }
  get checkInvalid() {
    if (
      this.data.pid === '' ||
      this.data.pid == null ||
      this.data.description === '' ||
      this.data.description == null ||
      this.data.name === '' ||
      this.data.name == null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
