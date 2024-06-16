import { Component } from '@angular/core';
import { filter1, filter2, filter3 } from '../strings/videos';
import { logoPath } from '../strings/intro';

type Filter = {
  name: string;
}

type VideoPreview = {
  name: string;
  path: string;
}

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss'
})
export class VideoGalleryComponent {
  filters: Filter[] = [
    {
      name: filter1,
    },
    {
      name: filter2,
    },
    {
      name: filter3,
    },
  ]

  videos: VideoPreview[] = [
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
    {
      path: logoPath,
      name: 'Video 1',
    },
  ]
}
