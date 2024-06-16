import { Component, Input } from '@angular/core';
import { filter1, filter2, filter3 } from '../strings/videos';

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
  url: string;
}

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss'
})
export class VideoGalleryComponent {
  @Input() onSelectVideo!: (src: string) => void

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
      type: Type.MD,
      path: 'assets/thumbnail/capture1.png',
      name: 'Pharmaceutical Company Animation',
      url: 'https://player.vimeo.com/video/950842039?h=5f38d031f2'
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture1.png',
      name: 'Frog Animation',
      url: 'https://player.vimeo.com/video/950843409?h=122c556dfd'
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture2.png',
      name: 'Working From Home Animation',
      url: 'https://player.vimeo.com/video/950843968?h=ff06ee5cac'
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture3.png',
      name: 'Blue',
      url: 'https://player.vimeo.com/video/950846203?h=661abe13f9'
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture4.png',
      name: 'Mind-Body Connection Explainer',
      url: ''
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture5.png',
      name: 'Moon Cycle Animation',
      url: 'https://player.vimeo.com/video/950846845?h=e16980c954'
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture6.png',
      name: 'Windmill Animation',
      url: ''
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture7.png',
      name: 'Name Animation',
      url: ''
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture8.png',
      name: 'Dialogue Opener',
      url: 'https://player.vimeo.com/video/830933663?h=35955ad039'
    },
    {
      type: Type.CA,
      path: 'assets/thumbnail/capture9.png',
      name: '3D Character Animation Reel 2024',
      url: 'https://vimeo.com/830933663'
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture10.png',
      name: 'Hailo-Holiday Short',
      url: 'https://vimeo.com/950849766'
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture11.png',
      name: 'Hailo-Demo ',
      url: 'https://vimeo.com/905515939'
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture12.png',
      name: 'Hailo-Renesas demo',
      url: 'https://vimeo.com/905509689'
    },
  ]


  constructor() {
    this.videos = this.allVideos.filter((e) => e.type === Type.CA)
  }

  handleVideoClick = (v: VideoPreview) => {
    this.onSelectVideo(v.url)
  }

  handleSelectFilter = (f: Filter) => {
    this.filters.forEach((e) => {
      e.isSelected = e.type === f.type
    })

    this.videos = this.allVideos.filter((e) => e.type === f.type)
  }
}
