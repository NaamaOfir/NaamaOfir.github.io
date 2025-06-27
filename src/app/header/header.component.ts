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
  readonly aboutText1 = "Hi! I am Naama, a 3D Character Animator, Motion Designer and Video Editor,"
  readonly aboutText11 = "a Graduate of Bezalel Academy of Arts and Design in 2021."
  readonly aboutText2 = "I love making beautiful Visuals and making stories come alive. "

  filters: Filter[] = [
    {
      type: Type.MD,
      isSelected: true,
    },
    {
      type: Type.VP,
      isSelected: false,
    },
    {
      type: Type.CA,
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
