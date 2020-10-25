import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: string[] = [];
  private $direction: 'left' | 'top' | 'right' | 'bottom' = 'left';
  @HostBinding('attr.data-dir')
  get direction() {
    return this.$direction;
  }
  slices: number[] = new Array(5).fill(1).map((val, i) => val + i);
  constructor() { }

  ngOnInit(): void {
  }
  trigger() {}
}
