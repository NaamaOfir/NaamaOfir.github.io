import { Component } from '@angular/core';
import { defaultVideoSrc } from '../strings/videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  currentVideoSrc: string = defaultVideoSrc

  handleSelectVideo = (src: string) => {
    this.currentVideoSrc = src
  }
}
