import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonPlanComponent } from './addon-plan.component';

describe('AddonPlanComponent', () => {
  let component: AddonPlanComponent;
  let fixture: ComponentFixture<AddonPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
