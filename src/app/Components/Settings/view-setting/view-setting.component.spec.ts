import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSettingComponent } from './view-setting.component';

describe('ViewSettingComponent', () => {
  let component: ViewSettingComponent;
  let fixture: ComponentFixture<ViewSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSettingComponent]
    });
    fixture = TestBed.createComponent(ViewSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
