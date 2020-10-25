import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { YoutubeService } from '../../services/youtube';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, AfterViewInit, OnDestroy {
  videos: any[] = [
    {
      id: 'UcOx6Bm3_4k',
      title: 'FULL SONG: Yeh Aaina | Kabir Singh | Shahid Kapoor, Kiara Advani Nikita D| Amaal Mallik Feat.Shreya',
      publishedAt: '2020-06-16T06:24:42Z',
      thumbnail: 'https://i.ytimg.com/vi/UcOx6Bm3_4k/mqdefault.jpg',
    },
    {
      id: 'lLEbczpJqOo',
      title: 'Main Rahoon Ya Na Rahoon/Dil Kyun Yeh Mera | Prakriti Kakar|Amaal Mallik |T-SERIES MIXTAPE SEASON 2',
      publishedAt: '2020-06-16T06:25:14Z',
      thumbnail: 'https://i.ytimg.com/vi/lLEbczpJqOo/mqdefault.jpg'
    },
    {
      id: 'MRtRcTfszjY',
      title: 'Soch Na Sake FULL VIDEO SONG | AIRLIFT | Akshay Kumar, Nimrat Kaur | Arijit Singh, Tulsi Kumar',
      publishedAt: '2020-06-16T06:26:56Z',
      thumbnail: 'https://i.ytimg.com/vi/MRtRcTfszjY/mqdefault.jpg'
    },
    {
      id: 'atVof3pjT-I',
      title: 'KAUN TUJHE Full  Video | M.S. DHONI -THE UNTOLD STORY |Amaal Mallik Palak|Sushant Singh Disha Patani',
      publishedAt: '2020-06-16T06:28:59Z',
      thumbnail: 'https://i.ytimg.com/vi/atVof3pjT-I/mqdefault.jpg'
    },
    {
      id: 'fWQpb6T89d4',
      title: 'Full Video: CHALE AANA | De De Pyaar De I Ajay Devgn, Tabu, Rakul Preet l Armaan M, Amaal M,Kunaal V',
      publishedAt: '2020-06-16T06:31:42Z',
      thumbnail: 'https://i.ytimg.com/vi/fWQpb6T89d4/mqdefault.jpg'
    }
  ].map((item) => {
    const thumbnail = this.$sanitizer.bypassSecurityTrustStyle(`url("${item.thumbnail}")`);
    return { ...item, thumbnail };
  });
  @ViewChild('playlist', { static: true }) listRef: ElementRef<HTMLUListElement>;
  @ViewChild('btnLeft', { static: true }) btnLeftRef: MatButton;
  @ViewChild('btnRight', { static: true }) btnRightRef: MatButton;
  private $scrollHandler = this.onScrollHandler.bind(this);
  constructor(private $youtube: YoutubeService, private $sanitizer: DomSanitizer) {
    // $youtube.playlist().then(({ nextPage, items }) => {
    //   console.log(items);
    //   // this.videos = items;
    // });
  }

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
}
