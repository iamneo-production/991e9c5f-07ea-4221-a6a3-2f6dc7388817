import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerAddonsComponent } from './customerAddons.component';

describe('CustomerAddonsComponent', () => {
  let component: CustomerAddonsComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerAddonsComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerAddonsComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerAddonsTest', () => {
    expect(component).toBeTruthy();
  });
});