import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadurlComponent } from './downloadurl.component';

describe('DownloadurlComponent', () => {
  let component: DownloadurlComponent;
  let fixture: ComponentFixture<DownloadurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
