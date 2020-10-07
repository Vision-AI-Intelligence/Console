import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  userInformation = [
    {
      photoURL: '../../../../../assets/images/user.png',
      email: 'abc@gmail.com'
    },
    {
      photoURL: '../../../../../assets/images/user.png',
      email: 'lorem.ipsum@gmail.com'
    },
    {
      photoURL: '../../../../../assets/images/user.png',
      email: 'user01@gmail.com'
    }
  ];

  defaultElevation = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
