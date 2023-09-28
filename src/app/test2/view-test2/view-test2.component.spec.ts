import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTest2Component } from './view-test2.component';

describe('ViewTest2Component', () => {
  let component: ViewTest2Component;
  let fixture: ComponentFixture<ViewTest2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTest2Component]
    });
    fixture = TestBed.createComponent(ViewTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
