import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrl: './video-filter.component.scss'
})
export class VideoFilterComponent {
  @Input() text!: string;

}
