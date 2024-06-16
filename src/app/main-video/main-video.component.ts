import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { defaultVideoSrc } from '../strings/videos';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrl: './main-video.component.scss'
})
export class MainVideoComponent {
  @Input() unSafeSrc!: string
  safeSrc?: SafeUrl

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(defaultVideoSrc);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['unSafeSrc']) {
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.unSafeSrc);
    }
  }

}
