import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-us-form',
  templateUrl: './choose-us-form.component.html',
  styleUrls: ['./choose-us-form.component.scss']
})
export class ChooseUsFormComponent implements OnInit {
  list = [null, null];
  constructor() { }

  ngOnInit(): void {
  }

}
