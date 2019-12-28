import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentfiveComponent } from './assignmentfive.component';

describe('AssignmentfiveComponent', () => {
  let component: AssignmentfiveComponent;
  let fixture: ComponentFixture<AssignmentfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
