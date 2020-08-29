import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataexchangeComponent } from './dataexchange.component';

describe('DataexchangeComponent', () => {
  let component: DataexchangeComponent;
  let fixture: ComponentFixture<DataexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
