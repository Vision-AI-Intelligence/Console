import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogModule  } from '@angular/material';
@Component({
  selector: 'app-bucket-options',
  templateUrl: './bucket-options.component.html',
  styleUrls: ['./bucket-options.component.scss']
})
export class BucketOptionsComponent implements OnInit {

  title = 'Bucket options';
  value = 'Clear me';
  constructor(
    private dialogRef: MatDialogRef<BucketOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onSet() {
    this.dialogRef.close(this.data);
  }
}