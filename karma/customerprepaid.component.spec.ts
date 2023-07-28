import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerPrepaidComponent } from './customerPrepaid.component';

describe('CustomerPrepaidComponent', () => {
  let component: CustomerPrepaidComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerPrepaidComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerPrepaidComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerPrepaidTest', () => {
    expect(component).toBeTruthy();
  });
});