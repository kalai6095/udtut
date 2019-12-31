import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserableexampleComponent } from './obserableexample.component';

describe('ObserableexampleComponent', () => {
  let component: ObserableexampleComponent;
  let fixture: ComponentFixture<ObserableexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserableexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserableexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
