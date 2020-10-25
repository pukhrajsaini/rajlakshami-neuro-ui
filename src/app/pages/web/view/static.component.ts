import { Component, OnInit, ElementRef } from '@angular/core';
import { BRAND_INFO } from 'src/app/constants';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  info = BRAND_INFO;
  isMenuHidden = true;
  constructor(
    private $elRef: ElementRef<HTMLElement>,
  ) {
  }
  ngOnInit(): void {
  }
  onNavigate(id: string) {
    this.isMenuHidden = true;
    const parent = this.$elRef.nativeElement;
    const target: HTMLElement = parent.querySelector(`#${id}`);
    parent.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop - 64,
    });
  }
  onScrollTop() {
    const target = this.$elRef.nativeElement;
    target.scroll({ top: 0, behavior: 'smooth' });
  }
}
