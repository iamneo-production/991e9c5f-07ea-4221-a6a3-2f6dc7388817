import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeDetailsComponent } from './recharge-details.component';

describe('RechargeDetailsComponent', () => {
  let component: RechargeDetailsComponent;
  let fixture: ComponentFixture<RechargeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
