import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AijobsComponent } from './aijobs.component';

describe('AijobsComponent', () => {
  let component: AijobsComponent;
  let fixture: ComponentFixture<AijobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AijobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AijobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
