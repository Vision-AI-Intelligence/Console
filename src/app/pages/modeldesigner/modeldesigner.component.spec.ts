import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldesignerComponent } from './modeldesigner.component';

describe('ModeldesignerComponent', () => {
  let component: ModeldesignerComponent;
  let fixture: ComponentFixture<ModeldesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
