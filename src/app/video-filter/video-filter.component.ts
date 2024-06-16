import { Component, Input } from '@angular/core';
import { Filter } from '../video-gallery/video-gallery.component';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrl: './video-filter.component.scss'
})
export class VideoFilterComponent {
  @Input() filter!: Filter;
  @Input() onSelect!: (f: Filter) => void;

  // TODO this should be on all elem not just text
  handleSelect() {
    this.onSelect(this.filter)
  }

}
