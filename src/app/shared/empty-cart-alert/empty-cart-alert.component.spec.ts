import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCartAlertComponent } from './empty-cart-alert.component';

describe('EmptyCartAlertComponent', () => {
  let component: EmptyCartAlertComponent;
  let fixture: ComponentFixture<EmptyCartAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyCartAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCartAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
