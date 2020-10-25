import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  formGroup!: FormGroup;
  locations: string[] = [
    'Health Hospital, Tenali',
    'Indo-British Hospitals, Vijayawada',
    'Kolkatta North24 Parganas, Kolkata',
    'Annapurna Superspeciality Hospital, Gudivada'
  ];
  patientForm!: FormGroup;
  appointmentForm!: FormGroup;
  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      patient: fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        gender: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', Validators.required],
        age: ['', Validators.required],
        place: ['', Validators.required],
        occupation: ['', Validators.required],
      }),
      appointment: fb.group({
        complaint: [''],
        time: ['', Validators.required],
        type: ['', Validators.required],
        mode: [{ value: '', disabled: true }, Validators.required],
        location: [{ value: '', disabled: true }, Validators.required],
      })
    });
    const { patient, appointment } = this.formGroup.controls;
    this.patientForm = patient as FormGroup;
    this.appointmentForm = appointment as FormGroup;
  }

  ngOnInit(): void {
    const { mode, location, type } = this.appointmentForm.controls;
    type.valueChanges.subscribe((val) => {
      if (val === 'Telemedicine') {
        mode.enable();
        location.disable();
      } else if (val === 'Outpatient') {
        mode.disable();
        location.enable();
      } else {
        mode.disable();
        location.disable();
      }
    });
  }

}
