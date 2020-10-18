import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.scss']
})
export class DeleteprojectComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteprojectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  onDelete() {
    this.dialogRef.close(this.data);
  }
}
