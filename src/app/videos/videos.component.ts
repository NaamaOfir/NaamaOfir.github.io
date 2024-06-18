import { Component, ViewChild } from '@angular/core';
import { defaultVideoSrc } from '../strings/videos';
import { Filter, VideoGalleryComponent } from '../video-gallery/video-gallery.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  currentVideoSrc: string = defaultVideoSrc

  @ViewChild('gallery') gallery!: VideoGalleryComponent;


  onChangeFilter = (f: Filter) => {
    this.gallery.handleSelectFilter(f)
  }

  handleSelectVideo = (src: string) => {
    this.currentVideoSrc = src
  }
}
