import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerPostpaidComponent } from './customerpostpaid.component';

describe('CustomerPostpaidComponent', () => {
  let component: CustomerPostpaidComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerPostpaidComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerPostpaidComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerPostpaidTest', () => {
    expect(component).toBeTruthy();
  });
});