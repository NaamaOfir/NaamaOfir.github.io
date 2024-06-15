import { Component, Input } from '@angular/core';
import { fullName, logoPath, shortDescription } from '../../strings/intro';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  readonly logoPath = logoPath;
  readonly title = fullName;
  readonly subtitle = shortDescription;

  @Input() nextElemId!: string

  scrollDown() {
    const nextElem = document.getElementById(this.nextElemId);
    nextElem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
