import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-downloadurl',
  templateUrl: './downloadurl.component.html',
  styleUrls: ['./downloadurl.component.scss']
})
export class DownloadurlComponent implements OnInit {

  title = 'Download file from URL';
  value = 'Clear me';
  constructor(
    private dialogRef: MatDialogRef<DownloadurlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onDownload() {
    this.dialogRef.close(this.data);
  }
}
