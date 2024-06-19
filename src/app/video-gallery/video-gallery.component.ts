import { Component, Input } from '@angular/core';

export enum Type {
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
  isSelected: boolean;
}

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss'
})
export class VideoGalleryComponent {
  @Input() onSelectVideo!: (src: string) => void

  isGrid = false


  videos: VideoPreview[] = []

  readonly allVideos: VideoPreview[] = [
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture1.png',
      name: 'Pharmaceutical Company Animation',
      url: 'https://player.vimeo.com/video/950842039?h=5f38d031f2',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture2.png',
      name: 'Frog Animation',
      url: 'https://player.vimeo.com/video/950843409?h=122c556dfd',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture3.png',
      name: 'Working From Home Animation',
      url: 'https://player.vimeo.com/video/950843968?h=ff06ee5cac',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture4.png',
      name: 'Blue',
      url: 'https://player.vimeo.com/video/950846203?h=661abe13f9',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture5.png',
      name: 'Mind-Body Connection Explainer',
      url: 'https://player.vimeo.com/video/950847796?h=a27afd3b38',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture6.png',
      name: 'Moon Cycle Animation',
      url: 'https://player.vimeo.com/video/950846845?h=e16980c954',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture7.png',
      name: 'Windmill Animation',
      url: 'https://player.vimeo.com/video/950848729?h=25e3d48954',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture8.png',
      name: 'Name Animation',
      url: 'https://player.vimeo.com/video/952260773?h=8fa4cdb0d4',
      isSelected: false,
    },
    {
      type: Type.MD,
      path: 'assets/thumbnail/capture9.png',
      name: 'Dialogue Opener',
      url: 'https://player.vimeo.com/video/955779910?h=f02c69c511',
      isSelected: false,
    },
    {
      type: Type.CA,
      path: 'assets/thumbnail/capture10.png',
      name: '3D Character Animation Reel 2024',
      url: 'https://player.vimeo.com/video/830933663?h=35955ad039',
      isSelected: false,
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture11.png',
      name: 'Hailo-Holiday Short',
      url: 'https://player.vimeo.com/video/950849766?h=0fad089f95',
      isSelected: true,
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture12.png',
      name: 'Hailo-Demo',
      url: 'https://player.vimeo.com/video/905515939?h=f8381f3038',
      isSelected: false,
    },
    {
      type: Type.VP,
      path: 'assets/thumbnail/capture13.png',
      name: 'Hailo-Renesas Demo',
      url: 'https://player.vimeo.com/video/905509689?h=96b7eb38e3',
      isSelected: false,
    },
  ]

  constructor() {
    this.videos = this.allVideos.filter((e) => e.type === Type.VP)
  }

  scrollDown() {
    const nextElem = document.getElementById('nextElemId');
    nextElem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleVideoClick = (v: VideoPreview) => {
    this.allVideos.forEach((e) => e.isSelected = false)
    v.isSelected = true
    this.onSelectVideo(v.url)
    if (window.innerWidth > 1024) {
      this.scrollDown()
    }
  }

  public handleSelectFilter = (f: Filter) => {


    if (f.type === Type.MD) {
      this.isGrid = true
    } else {
      this.isGrid = false
    }

    this.videos = this.allVideos.filter((e) => e.type === f.type)
  }
}
