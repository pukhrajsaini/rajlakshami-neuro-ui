import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-treatments',
  templateUrl: './about-treatments.component.html',
  styleUrls: ['./about-treatments.component.scss']
})
export class AboutTreatmentsComponent implements OnInit {
  services = [
    'HEAD INJURY',
    'SPINAL INJURY',
    'BRAIN TUMOURS',
    'PITUITARY TUMOURS',
    'SPINAL TUMOURS',
    'CSF LEAKS THROUGH NOSE',
    'MENINGIOMAS',
    'GLIOMA',
    'GLIOBLASTOMA MUTIFORME',
    'PINEAL TUMOURS',
    'CRANIOPHARYNGIOMA',
    'CHORDOMAS',
    'SKULL TUMOURS',
    'HAEMANGIOPERICYTOMAS',
    'HAEMANGIOBLASTOMAS',
    'ANEURYSMS',
    'AVM MALFORMATIONS',
    'VASCULAR TUMOURS',
    'CERVICAL DISC',
    'CERVICAL SPONDYLOSIS',
    'CERVICAL LISTHESIS',
    'DORSAL DISC',
    'DORSAL OPLL',
    'LUMBAR DISC',
    'LUMBAR SPONDYLOLISTHEIS',
    'LUMBAR SPONDYLOSIS',
    'LUMBAR /DORSAL /CERVICAL FRACTURES'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
