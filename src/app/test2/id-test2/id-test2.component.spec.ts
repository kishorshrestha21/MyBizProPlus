import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTest2Component } from './id-test2.component';

describe('IdTest2Component', () => {
  let component: IdTest2Component;
  let fixture: ComponentFixture<IdTest2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdTest2Component]
    });
    fixture = TestBed.createComponent(IdTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
