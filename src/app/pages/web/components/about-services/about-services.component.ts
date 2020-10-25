import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.scss']
})
export class AboutServicesComponent implements OnInit {
  services = [
    'NEUROSURGERY',
    'SPINE SURGERY',
    'NEURO-ENDOSCOPY',
    'KEY-HOLE SURGERY',
    'SKULL-BASE SURGERY',
    'ENDOSCOPIC-SPINE SURGERY',
    'OPEN NEURO-VASCULAR SURGERIES',
    'MINIMALLY INVASIVE SPINE SURGERY',
    'INTERVENTIONAL-NEUROVASCULAR THERAPY',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
