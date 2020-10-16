import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Bucket } from '../../../../../models/bucket.model';
@Component({
  selector: 'app-createbucket',
  templateUrl: './createbucket.component.html',
  styleUrls: ['./createbucket.component.scss']
})
export class CreatebucketComponent implements OnInit {
  title = 'Create new bucket';
  value = 'Clear me';
  isPublic = true;
  constructor(
    private dialogRef: MatDialogRef<CreatebucketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bucket
  ) { }

  ngOnInit(): void {
    this.data.isPublic = this.isPublic;
  }
  onCreateBucket() {
    this.dialogRef.close(this.data);
  }
  onToggle(value: any) {
    this.isPublic = !this.isPublic;
  }
}
