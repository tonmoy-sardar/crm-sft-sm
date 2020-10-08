import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPoolComponent } from './lead-pool.component';

describe('LeadPoolComponent', () => {
  let component: LeadPoolComponent;
  let fixture: ComponentFixture<LeadPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
