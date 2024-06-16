import { Component } from '@angular/core';
import { filter1, filter2, filter3 } from '../strings/videos';
import { logoPath } from '../strings/intro';

enum Type {
  ALL,
  MD,
  CA,
  VP,
}

export type Filter = {
  name: string;
  type: Type;
  isSelected: boolean;
}

type VideoPreview = {
  type: Type;
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
      type: Type.MD,
      name: filter1,
      isSelected: false,
    },
    {
      type: Type.CA,
      name: filter2,
      isSelected: true,
    },
    {
      type: Type.VP,
      name: filter3,
      isSelected: false,
    },
  ]


  videos: VideoPreview[] = []

  readonly allVideos: VideoPreview[] = [
    {
      type: Type.CA,
      path: logoPath,
      name: 'Type.CA',
    },
    {
      type: Type.CA,
      path: logoPath,
      name: 'Type.CA',
    },
    {
      type: Type.VP,
      path: logoPath,
      name: 'Type.VP',
    },
    {
      type: Type.VP,
      path: logoPath,
      name: 'Type.VP',
    },
    {
      type: Type.MD,
      path: logoPath,
      name: 'Type.MD',
    },
    {
      type: Type.VP,
      path: logoPath,
      name: 'Type.VP',
    },
    {
      type: Type.CA,
      path: logoPath,
      name: 'Type.CA',
    },
  ]

  constructor() {
    this.videos = this.allVideos.filter((e) => e.type === Type.CA)
  }

  handleSelectFilter = (f: Filter) => {
    this.filters.forEach((e) => {
      e.isSelected = e.type === f.type
    })

    this.videos = this.allVideos.filter((e) => e.type === f.type)
  }
}
