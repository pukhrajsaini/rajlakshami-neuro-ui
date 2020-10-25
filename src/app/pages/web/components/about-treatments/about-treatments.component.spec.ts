import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTreatmentsComponent } from './about-treatments.component';

describe('AboutTreatmentsComponent', () => {
  let component: AboutTreatmentsComponent;
  let fixture: ComponentFixture<AboutTreatmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTreatmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
