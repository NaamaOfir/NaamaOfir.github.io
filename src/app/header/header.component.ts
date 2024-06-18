import { Component, Input } from '@angular/core';
import { fullName, logoPath } from '../strings/intro';

import { filter1, filter2, filter3 } from '../strings/videos';
import { Type } from '../video-gallery/video-gallery.component';

export type Filter = {
  name: string;
  type: Type;
  isSelected: boolean;
}


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
      type: Type.VP,
      name: filter3,
      isSelected: true,
    },
    {
      type: Type.MD,
      name: filter1,
      isSelected: false,
    },
    {
      type: Type.CA,
      name: filter2,
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
