import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability-form',
  templateUrl: './availability-form.component.html',
  styleUrls: ['./availability-form.component.scss']
})
export class AvailabilityFormComponent implements OnInit {
  hospitals = [null, null];
  constructor() { }

  ngOnInit(): void {
  }

}
