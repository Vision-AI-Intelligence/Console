import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modeldesigner',
  templateUrl: './modeldesigner.component.html',
  styleUrls: ['./modeldesigner.component.scss']
})
export class ModeldesignerComponent implements OnInit {

  model = 'option1';
  bucket = 'option1';
  constructor() {
  }

  ngOnInit(): void {
  }

}
