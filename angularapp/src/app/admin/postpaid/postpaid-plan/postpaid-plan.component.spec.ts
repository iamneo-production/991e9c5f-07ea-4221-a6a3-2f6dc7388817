import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidPlanComponent } from './postpaid-plan.component';

describe('PostpaidPlanComponent', () => {
  let component: PostpaidPlanComponent;
  let fixture: ComponentFixture<PostpaidPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
