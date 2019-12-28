import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserComponent } from './userser.component';

describe('UserserComponent', () => {
  let component: UserserComponent;
  let fixture: ComponentFixture<UserserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
