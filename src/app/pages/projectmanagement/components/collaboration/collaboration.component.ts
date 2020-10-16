import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { UserAuthentication } from '../../../../services/user/auth.service';
@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit, AfterViewInit {
  @ViewChild('input') searchInput: ElementRef;

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
  searchInputValue = '';
  suggestionUsers: any;

  constructor(
    private userService: UserAuthentication
  ) { }

  async ngAfterViewInit() {

    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event) => event), debounceTime(200),
    )
      .subscribe(async (ev) => {
        console.log('Ev: ' + ev);
        console.log('Search input: ' + this.searchInputValue);
        if (this.searchInputValue.trim() === "") {
          return;
        }
        this.suggestionUsers = await this.userService.searchUser(this.searchInputValue);
        this.suggestionUsers = this.suggestionUsers["result"];
        console.log(this.suggestionUsers);
      });


  }

  ngOnInit(): void {
  }

}
