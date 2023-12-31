import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesignationComponent } from './view-designation.component';

describe('ViewDesignationComponent', () => {
  let component: ViewDesignationComponent;
  let fixture: ComponentFixture<ViewDesignationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDesignationComponent]
    });
    fixture = TestBed.createComponent(ViewDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
