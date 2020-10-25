import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { SLIDER } from '../../constants/choose.constants';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit, AfterViewInit {
  slider: string[] = SLIDER.map((url) => `url("${url}")`);
  sliderIndex = 0;
  sliderId!: NodeJS.Timer;
  constructor(private $elRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.autoSlide();
  }
  autoSlide() {
    if (this.sliderId) {
      clearInterval(this.sliderId);
    }
    this.sliderId = setInterval(() => {
      if (this.sliderIndex === this.slider.length - 1) {
        this.sliderIndex = 0;
      } else {
        ++this.sliderIndex;
      }
      setTimeout(this.refreshSlider.bind(this));
    }, 3000);
  }
  onSlideHandler(index: number) {
    this.sliderIndex = index;
    setTimeout(this.refreshSlider.bind(this));
  }
  private refreshSlider() {
    const images = this.$elRef.nativeElement.querySelectorAll('figure');
    images.forEach((img, key: number) => {
      if (key === this.sliderIndex) {
        img.style.left = '0%';
      } else {
        if (key < this.sliderIndex) {
          img.style.left = '-100%';
        } else {
          img.style.left = '100%';
        }
      }
    });
  }
}
