import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsFormComponent } from './choose-us-form.component';

describe('ChooseUsFormComponent', () => {
  let component: ChooseUsFormComponent;
  let fixture: ComponentFixture<ChooseUsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
