import { Component, Input } from '@angular/core';
import { logoPath } from '../strings/intro';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrl: './video-preview.component.scss'
})
export class VideoPreviewComponent {
  @Input() path: string = logoPath;
  @Input() name: string = '';
}
