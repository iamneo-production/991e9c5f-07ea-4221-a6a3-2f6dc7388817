import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostpaidComponent } from './update-postpaid.component';

describe('UpdatePostpaidComponent', () => {
  let component: UpdatePostpaidComponent;
  let fixture: ComponentFixture<UpdatePostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
