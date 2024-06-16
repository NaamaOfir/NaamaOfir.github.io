import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  currentVideoSrc: string = ''

  handleSelectVideo(src: string) {
    this.currentVideoSrc = src
  }
}
