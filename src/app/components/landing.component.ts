import { Component, OnInit } from '@angular/core';
import { BRAND_INFO } from 'src/app/constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  info = BRAND_INFO;
  constructor() { }

  ngOnInit(): void {
  }

}
