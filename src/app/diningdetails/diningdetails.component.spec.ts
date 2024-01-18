import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningdetailsComponent } from './diningdetails.component';

describe('DiningdetailsComponent', () => {
  let component: DiningdetailsComponent;
  let fixture: ComponentFixture<DiningdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
