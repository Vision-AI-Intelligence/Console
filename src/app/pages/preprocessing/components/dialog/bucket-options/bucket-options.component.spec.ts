import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketOptionsComponent } from './bucket-options.component';

describe('BucketOptionsComponent', () => {
  let component: BucketOptionsComponent;
  let fixture: ComponentFixture<BucketOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
