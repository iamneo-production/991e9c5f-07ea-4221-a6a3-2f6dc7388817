import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PerpaidComponent } from './perpaid.component';

describe('PerpaidComponent', () => {
  let component: PerpaidComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [PerpaidComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(PerpaidComponent);
    component = fixture.componentInstance;
  });
  it('FE_perpaidTest', () => {
    expect(component).toBeTruthy();
  });
});