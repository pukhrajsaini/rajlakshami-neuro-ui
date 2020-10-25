import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSocialWorkComponent } from './about-social-work.component';

describe('AboutSocialWorkComponent', () => {
  let component: AboutSocialWorkComponent;
  let fixture: ComponentFixture<AboutSocialWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSocialWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSocialWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
