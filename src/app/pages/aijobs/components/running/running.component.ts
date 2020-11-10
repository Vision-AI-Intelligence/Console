import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AIJob } from '../../../../models/aijob.model';
@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit, AfterViewInit {

  // dataSource = new MatTableDataSource<Job>(this.data);
  displayedColumns: string[] = ['JobId', 'Description', 'Time', 'Type'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: AIJob[] = [
    {
      aijid: '#3',
      description: 'XRay model 03',
      elapsedTime: '1d 5h 30min',
      epochs: '200',
      loss: '0.12'
    },
    {
      aijid: '#2',
      description: 'XRay model 02',
      elapsedTime: '20min',
      epochs: '12',
      loss: '0.33'
    },
    {
      aijid: '#1',
      description: 'XRay model 01',
      elapsedTime: '1h 27min',
      epochs: '30',
      loss: '0.82'
    },
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
