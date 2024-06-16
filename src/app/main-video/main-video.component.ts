import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrl: './main-video.component.scss'
})
export class MainVideoComponent {
  @Input() src!: string

}
