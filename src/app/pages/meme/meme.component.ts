import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide():void{
    let elem : HTMLElement = document.getElementById('myspinkit')
    elem.setAttribute("style", "display:none;")
  }
  unhide():void{
    let elem : HTMLElement = document.getElementById('myspinkit')
    elem.setAttribute("style", "display:flex;")
  }
  
}
