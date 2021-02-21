import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferViewAllCustomersComponent } from './transfer-view-all-customers.component';

describe('TransferViewAllCustomersComponent', () => {
  let component: TransferViewAllCustomersComponent;
  let fixture: ComponentFixture<TransferViewAllCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferViewAllCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferViewAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
