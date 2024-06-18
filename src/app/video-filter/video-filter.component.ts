import { Component, HostListener, Input } from '@angular/core';
import { Filter } from '../video-gallery/video-gallery.component';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrl: './video-filter.component.scss'
})
export class VideoFilterComponent {
  @Input() isSelected!: boolean
  @Input() filter!: Filter;
  @Input() onSelect!: (f: Filter) => void;

  @HostListener('click') handleSelect(): void {
    this.onSelect(this.filter)
  }
}
