import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivePurchaseComponent } from './recive-purchase.component';

describe('RecivePurchaseComponent', () => {
  let component: RecivePurchaseComponent;
  let fixture: ComponentFixture<RecivePurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivePurchaseComponent]
    });
    fixture = TestBed.createComponent(RecivePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
