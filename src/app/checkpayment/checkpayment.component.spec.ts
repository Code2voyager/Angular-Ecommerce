import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpaymentComponent } from './checkpayment.component';

describe('CheckpaymentComponent', () => {
  let component: CheckpaymentComponent;
  let fixture: ComponentFixture<CheckpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
