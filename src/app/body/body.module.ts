import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './intro/intro.component';
import { ScrollIndicatorComponent } from './scroll-indicator/scroll-indicator.component';
import { VideoGalleryComponent } from '../video-gallery/video-gallery.component';
import { MainVideoComponent } from '../main-video/main-video.component';
import { VideosComponent } from '../videos/videos.component';
import { VideoFilterComponent } from '../video-filter/video-filter.component';
import { VideoPreviewComponent } from '../video-preview/video-preview.component';


@NgModule({
  declarations: [
    IntroComponent,
    ScrollIndicatorComponent,
    VideoGalleryComponent,
    MainVideoComponent,
    VideosComponent,
    VideoFilterComponent,
    VideoPreviewComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IntroComponent,
    VideosComponent,
  ]
})
export class BodyModule { }
