import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleClose() {
    this.closeSidenav.emit();
  }
}
