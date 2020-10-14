import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BucketService } from '../../services/bucket/bucket.service';
import { CreatebucketComponent } from './components/dialogs/createbucket/createbucket.component';
@Component({
  selector: 'app-databuckets',
  templateUrl: './databuckets.component.html',
  styleUrls: ['./databuckets.component.scss']
})
export class DatabucketsComponent implements OnInit {

  buckets = [
    {
      bid: 'bucket-001'
    },
    {
      bid: 'bucket-002'
    },
    {
      bid: 'bucket-003'
    }
  ];
  menuContext = ['Info', 'Delete'];

  // public bucketData = [];
  private dialogRef = null;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private bucketService: BucketService
  ) { }
  dialogWidth = '500px';
  ngOnInit(): void {
  }
  async createBucket() {
    const inputData = {
      bid: '',
      isPublic: 'true'
    };
    this.dialogRef = this.dialog.open(CreatebucketComponent, {
      width: this.dialogWidth,
      // hasBackdrop: true,
      data: inputData,
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data.bid !== '' && data.bid !== undefined
        && data !== '' && data !== undefined && data !== null) {
        this.bucketService.createBucket(data);
        this.buckets.push(data);
        console.log(this.buckets);
      }
    });
  }
  onClickMenuContext(menuContent: any) {
    switch (menuContent) {
      case this.menuContext[0]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[1]:
        console.log(menuContent + ' clicked');
        break;
    }
  }
}
