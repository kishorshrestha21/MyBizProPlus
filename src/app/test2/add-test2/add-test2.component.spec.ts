import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTest2Component } from './add-test2.component';

describe('AddTest2Component', () => {
  let component: AddTest2Component;
  let fixture: ComponentFixture<AddTest2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTest2Component]
    });
    fixture = TestBed.createComponent(AddTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
