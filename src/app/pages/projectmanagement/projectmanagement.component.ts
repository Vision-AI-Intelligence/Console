import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss']
})
export class ProjectmanagementComponent implements OnInit {

  @ViewChild('buttonsContainer', { static: true }) buttonsContainer: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  buttons: {
    id: number
  }[] = [{ id: 0 }];

  generateButton() {
    const button = this.renderer.createElement('button');
    const color = '#FF9237';
    const font = 'Open Sans';
    const width = '15vh';
    const height = '15vh';
    const borderRadius = '10px';
    const border = '0';
    const margin = '1%';
    this.renderer.setStyle(button, 'background', color);
    this.renderer.setStyle(button, 'font-family', font);
    this.renderer.setStyle(button, 'width', width);
    this.renderer.setStyle(button, 'height', height);
    this.renderer.setStyle(button, 'border-radius', borderRadius);
    this.renderer.setStyle(button, 'border', border);
    this.renderer.setStyle(button, 'outline', border);
    this.renderer.setStyle(button, 'margin', margin);
    this.renderer.setAttribute(button, 'button', 'mat-flat-button');
    const text = this.renderer.createText('New button');
    this.renderer.appendChild(button, text);
    this.buttons.push({
      id: this.buttons.length
    });
    this.renderer.appendChild(this.buttonsContainer.nativeElement, button);
    console.log(this.buttons.length);
  }
}
