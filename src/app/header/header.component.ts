import { Component, Input } from '@angular/core';
import { fullName, logoPath } from '../strings/intro';

import { Filter, Type } from '../video-gallery/video-gallery.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() onSelectFilter!: (f: Filter) => void
  readonly logoPath = logoPath;
  readonly title = fullName;

  filters: Filter[] = [
    {
      type: Type.MD,
      isSelected: true,
    },
    {
      type: Type.CA,
      isSelected: false,
    },
    {
      type: Type.VP,
      isSelected: false,
    },
  ]

  handleFilterSelect = (f: Filter) => {
    this.filters.forEach((e) => {
      e.isSelected = e.type === f.type
    })
    this.onSelectFilter(f)
  }
}
