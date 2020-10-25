import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListingComponent } from './appointment-listing.component';

describe('AppointmentListingComponent', () => {
  let component: AppointmentListingComponent;
  let fixture: ComponentFixture<AppointmentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
