import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  // panelOpenState = false;
  userDetails: User = null;
  @Output() SidenavToggle = new EventEmitter();

  menuContext = ['traffic-vid', 'x-ray-img', 'flowers'];
  constructor(
    public userAuth: UserAuthentication,
    private router: Router,
    private afAuth: AngularFireAuth) {
    afAuth.user.subscribe(usr => this.userDetails = usr);
  }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.SidenavToggle.emit();
  }
  onClickMenuContext(menuContent) {
    switch (menuContent) {
      case this.menuContext[0]: console.log(menuContent + ' clicked!'); break;
      case this.menuContext[1]: console.log(menuContent + ' clicked!'); break;
      case this.menuContext[2]: console.log(menuContent + ' clicked!'); break;
    }
  }
}
