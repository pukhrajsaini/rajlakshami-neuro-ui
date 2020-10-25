import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-achievments',
  templateUrl: './about-achievments.component.html',
  styleUrls: ['./about-achievments.component.scss']
})
export class AboutAchievmentsComponent implements OnInit {
  achievments = [
    { title: 'Gold Medal in MBBS', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { title: 'Gold Medal in MBBS', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { title: 'Gold Medal in MBBS', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
