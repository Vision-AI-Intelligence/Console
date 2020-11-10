import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MiscService } from 'src/app/services/misc.service';
import { ProjectService } from 'src/app/services/project/project.service';
import {Project} from '../../models/project.model'
import {BucketOptionsComponent} from './components/dialog/bucket-options/bucket-options.component'

@Component({
  selector: 'app-preprocessing',
  templateUrl: './preprocessing.component.html',
  styleUrls: ['./preprocessing.component.scss']
})
export class PreprocessingComponent implements OnInit, AfterViewInit {

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
  startPoint = null;
  currentPoint = null;
  endPoint = null;
  @ViewChild('ohShit') ohShit;
  @ViewChild('imgRef') imgRef;

  bboxLists = [];
  currentBox: any = null;
  createbox: boolean = false;

  private dialogRef = null;
  dialogWidth = '500px';
  public projects = [];

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private projectService: ProjectService,
    public miscService: MiscService,
  ) { }
  
  ngAfterViewInit(): void {
    console.log(this.ohShit);
    console.log(this.imgRef["nativeElement"].naturalHeight); // naturalHeight, naturalWidth, clientHeight, clientWidth
    console.log(this.imgRef["nativeElement"].naturalWidth);
  }

  ngOnInit(): void {}
  bucketOptionDialog():void{
    const inputData = {
      id: '',
      name: '',
      description: '',
    };
    this.dialogRef = this.dialog.open(BucketOptionsComponent, {
      width: this.dialogWidth,
      hasBackdrop: true,
      data: inputData,
    });
    // this.dialogRef.afterClosed().subscribe(async (data) => {
    //   if (data.id !== '' && data.id !== undefined
    //     && data.name !== '' && data.description !== '' && data !== '' && data !== undefined && data !== null) {
    //     const result = await this.projectService.CreateProject(data);
    //     if (result['message'] !== 'OK') {
    //       this.miscService.showSnackbarFail(`${data.id} created `);
    //       return;
    //     }
    //     this.projects.push(data);
    //     this.miscService.showSnackbarSuccessful(`${data.id} created `);
    //   }
    // });
  }
  createBox() {
    this.createbox = true;
    this.currentBox = null;
  }
  deleteLabel() {
    alert('Hello world');
  }
  addLabel(label: string) {
    this.labels.push({
      name: label
    });
  }
  onMouseDown(event: any) {
    console.log(event);
    this.startPoint = {
      x: event.clientX + event.offsetX,
      y: event.clientY + event.offsetY
    };
    if (this.createbox) {
      let box = this.renderer.createElement('DIV');
      this.renderer.setStyle(box, 'border', '1px dotted red');
      this.renderer.setStyle(box, 'background-color', 'transparent');
      //this.renderer.setStyle(box, 'left', '0');
      //this.renderer.setStyle(box, 'top', '0px');
      this.renderer.setStyle(box, 'left', this.startPoint.x + 'px');
      this.renderer.setStyle(box, 'top', this.startPoint.y + 'px');
      // this.renderer.setStyle(box, 'width', '0');
      // this.renderer.setStyle(box, 'height', '0');
      this.renderer.setStyle(box, 'width', '0px');
      this.renderer.setStyle(box, 'height', '0px');
      this.renderer.setStyle(box, 'position', 'absolute');
      this.renderer.setStyle(box, 'z-index', '1000');
      this.currentBox = box;

      this.renderer.appendChild(this.ohShit.nativeElement, this.currentBox);
    }
    console.log(this.startPoint);
  }
  onMouseMove(event: any) {
    this.currentPoint = {
      // x: event.clientX + (event.screenX - event.clientX),
      // y: event.clientY + (event.screenY - event.clientY)
      x: event.clientX + event.offsetX,
      y: event.clientY + event.offsetY
    };
    // console.log(this.currentPoint);
    if (this.startPoint != null && this.createbox === true && this.currentBox != null) {
      this.renderer.setStyle(this.currentBox, 'width', (this.currentPoint.x - this.startPoint.x) + "px");
      this.renderer.setStyle(this.currentBox, 'height', (this.currentPoint.y - this.startPoint.y) + "px");
    }

  }
  onMouseUp(event: any) {
    this.endPoint = {
      x: event.clientX + event.offsetX,
      y: event.clientY + event.offsetY
    }
    if (this.currentBox != null) {
      this.endPoint = {
        x: event.clientX + event.offsetX,
        y: event.clientY + event.offsetY
      };
      this.renderer.setStyle(this.currentBox, 'width', (this.endPoint.x - this.startPoint.x) + "px");
      this.renderer.setStyle(this.currentBox, 'height', (this.endPoint.y - this.startPoint.y) + "px");

      this.bboxLists.push({
        element: this.currentBox,
        start: { ...this.startPoint },
        end: { ...this.endPoint }
      });

      this.currentBox = null;
    }
    console.log(this.endPoint);
  }

}
