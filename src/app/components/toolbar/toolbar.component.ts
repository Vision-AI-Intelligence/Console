import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  panelOpenState = false;
  userDetails: User = null;
  constructor(
    public userAuth: UserAuthentication,
    private router: Router,
    private afAuth: AngularFireAuth) {
    afAuth.user.subscribe(usr => this.userDetails = usr);
  }

  ngOnInit() {
  }
}
