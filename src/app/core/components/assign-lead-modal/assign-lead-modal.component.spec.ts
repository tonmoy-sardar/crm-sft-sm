import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLeadModalComponent } from './assign-lead-modal.component';

describe('AssignLeadModalComponent', () => {
  let component: AssignLeadModalComponent;
  let fixture: ComponentFixture<AssignLeadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignLeadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLeadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
