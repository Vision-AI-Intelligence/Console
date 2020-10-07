import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit {

  data = [
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
  constructor() { }

  ngOnInit(): void {
  }
  onCancel() {
    console.log('Canceled');
  }
}
