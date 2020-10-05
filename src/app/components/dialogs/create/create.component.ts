import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateComponent } from '../update/update.component';
import { Project } from '../../../models/project.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = 'Create a new project';
  value = 'Clear me';
  input: '';
  constructor(
    private dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) { }

  ngOnInit(): void {
  }
  onCreate() {
    this.dialogRef.close(this.data);
  }
  get checkInvalid() {
    if (this.input === '' || this.input == null) {
      return true;
    } else {
      return false;
    }
  }
}
