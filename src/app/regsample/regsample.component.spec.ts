import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsampleComponent } from './regsample.component';

describe('RegsampleComponent', () => {
  let component: RegsampleComponent;
  let fixture: ComponentFixture<RegsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
