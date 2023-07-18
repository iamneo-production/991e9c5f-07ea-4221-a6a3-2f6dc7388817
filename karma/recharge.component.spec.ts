import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RechargeComponent } from './recharge.component';

describe('RechargeComponent', () => {
  let component: RechargeComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [RechargeComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(RechargeComponent);
    component = fixture.componentInstance;
  });
  it('FE_rechargeTest', () => {
    expect(component).toBeTruthy();
  });
});