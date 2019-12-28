import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanactivatedComponent } from './canactivated.component';

describe('CanactivatedComponent', () => {
  let component: CanactivatedComponent;
  let fixture: ComponentFixture<CanactivatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanactivatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
