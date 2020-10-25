import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { SLIDER } from '../../constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  sliderIndex = 0;
  slider: string[] = ['/assets/portfolio.jpg', ...SLIDER.slice(0, 3)].map((url) => `url("${url}")`);
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
    const images = this.$elRef.nativeElement.querySelectorAll('.slider figure');
    images.forEach((img: HTMLElement, key: number) => {
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
