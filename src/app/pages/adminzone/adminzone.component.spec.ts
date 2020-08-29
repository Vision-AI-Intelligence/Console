import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminzoneComponent } from './adminzone.component';

describe('AdminzoneComponent', () => {
  let component: AdminzoneComponent;
  let fixture: ComponentFixture<AdminzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
