import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Job } from '../../../../models/job.model';
@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit, AfterViewInit {

  // dataSource = new MatTableDataSource<Job>(this.data);
  displayedColumns: string[] = ['JobId', 'Description', 'Time', 'Type'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: Job[] = [
    {
      jid: '#3',
      description: 'bucket-001/datazip',
      time: '20s',
      type: 'Unzip'
    },
    {
      jid: '#2',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '17m10s',
      type: 'Download'
    },
    {
      jid: '#1',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '32m17s',
      type: 'Download'
    },
    {
      jid: '#3',
      description: 'bucket-001/datazip',
      time: '20s',
      type: 'Unzip'
    },
    {
      jid: '#2',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '17m10s',
      type: 'Download'
    },
    {
      jid: '#1',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '32m17s',
      type: 'Download'
    },
    {
      jid: '#3',
      description: 'bucket-001/datazip',
      time: '20s',
      type: 'Unzip'
    },
    {
      jid: '#2',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '17m10s',
      type: 'Download'
    },
    {
      jid: '#1',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '32m17s',
      type: 'Download'
    },
    {
      jid: '#3',
      description: 'bucket-001/datazip',
      time: '20s',
      type: 'Unzip'
    },
    {
      jid: '#2',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '17m10s',
      type: 'Download'
    },
    {
      jid: '#1',
      description: 'https://www.sample.com/repos/dataset.zip',
      time: '32m17s',
      type: 'Download'
    }
  ];

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor() { }
  ngOnInit(): void {
  }
  onCancel() {
    console.log('Canceled');
  }
}
