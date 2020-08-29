import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisServicesComponent } from './apis-services.component';

describe('ApisServicesComponent', () => {
  let component: ApisServicesComponent;
  let fixture: ComponentFixture<ApisServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
