import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeComponent } from './view-size.component';

describe('SizeComponent', () => {
  let component: SizeComponent;
  let fixture: ComponentFixture<SizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeComponent],
    });
    fixture = TestBed.createComponent(SizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
