import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebucketComponent } from './createbucket.component';

describe('CreatebucketComponent', () => {
  let component: CreatebucketComponent;
  let fixture: ComponentFixture<CreatebucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
