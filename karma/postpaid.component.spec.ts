import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostpaidComponent } from './postpaid.component';

describe('PostpaidComponent', () => {
  let component: PostpaidComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [PostpaidComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(PostpaidComponent);
    component = fixture.componentInstance;
  });
  it('FE_postpaidTest', () => {
    expect(component).toBeTruthy();
  });
});