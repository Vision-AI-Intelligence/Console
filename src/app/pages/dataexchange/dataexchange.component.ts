import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MatPaginator } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DownloadurlComponent } from './components/dialogs/downloadurl/downloadurl.component';

export interface DataExchange {
  position: number;
  symbol: string;
  name: string;
  date: Date;
  size: number;
}
const DATA: DataExchange[] = [
  { position: 1, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 12, 30), size: 5 },
  { position: 2, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 11, 23), size: 5 },
  { position: 3, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 26), size: 5 },
  { position: 4, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 9, 20), size: 5 },
  { position: 5, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 8, 16), size: 5 },
  { position: 6, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 7, 15), size: 5 },
  { position: 7, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 6, 12), size: 5 },
  { position: 8, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 10), size: 5 },
  { position: 9, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 4, 8), size: 5 },
  { position: 10, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 3, 6), size: 5 },
  { position: 11, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 2, 5), size: 5 },
  { position: 12, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 1, 4), size: 5 },
  { position: 13, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 3), size: 5 },
  { position: 14, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 2), size: 5 },
  { position: 1, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 12, 30), size: 5 },
  { position: 2, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 11, 23), size: 5 },
  { position: 3, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 26), size: 5 },
  { position: 4, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 9, 20), size: 5 },
  { position: 5, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 8, 16), size: 5 },
  { position: 6, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 7, 15), size: 5 },
  { position: 7, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 6, 12), size: 5 },
  { position: 8, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 10), size: 5 },
  { position: 9, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 4, 8), size: 5 },
  { position: 10, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 3, 6), size: 5 },
  { position: 11, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 2, 5), size: 5 },
  { position: 12, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 1, 4), size: 5 },
  { position: 13, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 3), size: 5 },
  { position: 14, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 2), size: 5 },
  { position: 1, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 12, 30), size: 5 },
  { position: 2, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 11, 23), size: 5 },
  { position: 3, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 26), size: 5 },
  { position: 4, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 9, 20), size: 5 },
  { position: 5, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 8, 16), size: 5 },
  { position: 6, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 7, 15), size: 5 },
  { position: 7, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 6, 12), size: 5 },
  { position: 8, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 10), size: 5 },
  { position: 9, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 4, 8), size: 5 },
  { position: 10, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 3, 6), size: 5 },
  { position: 11, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 2, 5), size: 5 },
  { position: 12, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 1, 4), size: 5 },
  { position: 13, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 10, 3), size: 5 },
  { position: 14, symbol: 'hello', name: 'Hydrogen', date: new Date(2020, 5, 2), size: 5 },
];

@Component({
  selector: 'app-dataexchange',
  templateUrl: './dataexchange.component.html',
  styleUrls: ['./dataexchange.component.scss']
})
export class DataexchangeComponent implements OnInit, AfterViewInit {

  dataUsed = 20.5;
  dataOverall = 40;

  displayedColumns: string[] = ['select', 'symbol', 'name', 'date', 'size', 'action'];
  dataSource = new MatTableDataSource<DataExchange>(DATA);
  selection = new SelectionModel<DataExchange>(true, []);
  disableSelect = new FormControl(false);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  groups = [{
    id: 1,
    name: 'pencils',
    items: 'red pencil'
  },
  {
    id: 2,
    name: 'rubbers',
    items: 'big rubber'
  },
  {
    id: 3,
    name: 'rubbers111111111111111111111111111111111111111111111111111111111111111111111111111',
    items: 'big rubber1'
  }];
  menuContext = ['Info', 'Copy', 'Move', 'Rename', 'Zip', 'Download'];
  dialogWidth = '500px';
  private dialogRef = null;
  private downloadedURLs = [];
  constructor(
    public dialog: MatDialog,
  ) { }
  selectedGroup = this.groups[0].name;

  getVal() {
    console.log(this.selectedGroup);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: DataExchange): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  createFolder() {
    console.log('Create Folder clicked!');
  }
  uploadFile() {
    console.log('Upload file clickec!');
  }
  async downloadFromURL() {
    this.dialogRef = this.dialog.open(DownloadurlComponent, {
      width: this.dialogWidth,
      data: DownloadurlComponent
    });
    await this.dialogRef.afterClosed().subscribe((data) => {
      if (data.fileName !== '' && data.fileName !== undefined
        && data.URL !== '' && data.URL !== undefined
        && data !== undefined && data !== '') {
        this.downloadedURLs.push({
          fileName: data.fileName,
          URL: data.URL
        });
        console.log(data.fileName);
        console.log(data.URL);
        // console.log(data);
        console.log(this.downloadedURLs);
      }
    });
  }
  onClickMenuContext(menuContent: any) {
    switch (menuContent) {
      case this.menuContext[0]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[1]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[2]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[3]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[4]:
        console.log(menuContent + ' clicked');
        break;
      case this.menuContext[5]:
        console.log(menuContent + ' clicked');
        break;
    }
  }
}
