import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { ABOUT_US } from '../../constants';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy, AfterViewInit {
  services = ABOUT_US;
  @ViewChild('serviceList', { static: true }) listRef: ElementRef<HTMLUListElement>;
  @ViewChild('btnLeft', { static: true }) btnLeftRef: MatButton;
  @ViewChild('btnRight', { static: true }) btnRightRef: MatButton;
  private $scrollHandler = this.onScrollHandler.bind(this);
  constructor(private $dialog: MatDialog) { }

  ngOnInit(): void {
    const el = this.listRef.nativeElement;
    fromEvent(el, 'scroll').pipe(debounceTime(300)).subscribe(this.$scrollHandler);
    window.addEventListener('resize', this.$scrollHandler);
  }
  ngAfterViewInit() {
    window.dispatchEvent(new Event('resize'));
  }
  private onScrollHandler() {
    const el = this.listRef.nativeElement;
    const leftBtn = this.btnLeftRef;
    const rightBtn = this.btnRightRef;
    if (!el.scrollLeft) {
      leftBtn.disabled = true;
    } else {
      leftBtn.disabled = false;
    }
    if (el.scrollWidth <= (el.scrollLeft + el.clientWidth)) {
      rightBtn.disabled = true;
    } else {
      rightBtn.disabled = false;
    }
  }
  onNavigateHandler(dir: number) {
    const el = this.listRef.nativeElement;
    const left = dir * el.clientWidth;
    el.scrollBy({ left });
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.$scrollHandler);
  }
  onShowMore(component: ComponentType<any>) {
    this.$dialog.open(component, {
      panelClass: 'custom-panel',
      autoFocus: false,
      backdropClass: 'custom-shadow'
    });
  }
}
