import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  currentStorage = 25;
  totalStorage = 40;

  currentJob = 1;
  totalJob = 10;

  currentTime = 300;
  totalTime = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
