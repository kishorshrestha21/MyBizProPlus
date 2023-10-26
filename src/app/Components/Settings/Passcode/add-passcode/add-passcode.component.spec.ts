import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasscodeComponent } from './add-passcode.component';

describe('AddPasscodeComponent', () => {
  let component: AddPasscodeComponent;
  let fixture: ComponentFixture<AddPasscodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPasscodeComponent]
    });
    fixture = TestBed.createComponent(AddPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
