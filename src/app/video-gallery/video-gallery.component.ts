import { Component, Input } from '@angular/core';
import { VideoDataService } from '../video-data/video-data.service';
import { firstValueFrom } from 'rxjs';

export enum Type {
  ALL = 'All',
  MD = 'Motion Design',
  CA = '3D Character Animation',
  VP = 'Video Projects',
}

export type Filter = {
  type: Type;
  isSelected: boolean;
}

type VidDetails = {
  name: string;
  path: string;
  url: string;
  isSelected: boolean;
}

type Category = {
  type: string;
  videos: VidDetails[];
}

export interface JsonStruct {
  all_videos: Category[];
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

  isGrid = true
  videos: VideoPreview[] = []
  allVideos: VideoPreview[] = []

  constructor(
    private videoDataService: VideoDataService
  ) {
  }

  async ngOnInit() {
    await this.loadVideos()

    this.videos = this.allVideos.filter((e) => e.type === Type.MD)
  }

  private async loadVideos() {
    const src = this.videoDataService.getJSON()
    const data = await firstValueFrom(src);
    data?.all_videos.forEach((e) => {
      e.videos.forEach((v) => {
        this.allVideos.push({
          type: this.getType(e.type),
          name: v.name,
          path: v.path,
          url: v.url,
          isSelected: v.isSelected,
        });
      });
    });
  }

  private getType(text: string): Type {
    switch (text) {
      case 'Motion Design':
        return Type.MD
      case '3D Character Animation':
        return Type.CA
      case 'Video Projects':
        return Type.VP
      default:
        return Type.ALL
    }
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
