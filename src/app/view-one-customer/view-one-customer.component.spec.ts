import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneCustomerComponent } from './view-one-customer.component';

describe('ViewOneCustomerComponent', () => {
  let component: ViewOneCustomerComponent;
  let fixture: ComponentFixture<ViewOneCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
