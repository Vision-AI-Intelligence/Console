import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabucketsComponent } from './databuckets.component';

describe('DatabucketsComponent', () => {
  let component: DatabucketsComponent;
  let fixture: ComponentFixture<DatabucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabucketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
