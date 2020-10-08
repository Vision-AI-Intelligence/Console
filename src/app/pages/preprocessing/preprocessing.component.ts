import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preprocessing',
  templateUrl: './preprocessing.component.html',
  styleUrls: ['./preprocessing.component.scss']
})
export class PreprocessingComponent implements OnInit {

  selected = 'option2';
  labels = [
    {
      name: 'Dog'
    },
    {
      name: 'Cat'
    },
    {
      name: 'Human face'
    },
    {
      name: 'Dog'
    },
    {
      name: 'Cat'
    },
    {
      name: 'Human face'
    }, {
      name: 'Dog'
    },
    {
      name: 'Cat'
    },
    {
      name: 'Human face'
    }, {
      name: 'Dog'
    },
    {
      name: 'Cat'
    },
    {
      name: 'Human face'
    },
    {
      name: 'Dog'
    },
    {
      name: 'Cat'
    },
    {
      name: 'Human face'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  deleteLabel() {
    alert('Hello world');
  }
  addLabel(label: string) {
    this.labels.push({
      name: label
    });
  }
}
