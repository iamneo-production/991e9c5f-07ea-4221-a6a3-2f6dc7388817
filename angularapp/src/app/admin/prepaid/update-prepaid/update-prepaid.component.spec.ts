import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrepaidComponent } from './update-prepaid.component';

describe('UpdatePrepaidComponent', () => {
  let component: UpdatePrepaidComponent;
  let fixture: ComponentFixture<UpdatePrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
