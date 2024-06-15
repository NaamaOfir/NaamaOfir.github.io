import { Component } from '@angular/core';
import { fullName, shortDescription } from '../strings/intro';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  readonly title = fullName;
  readonly subtitle = shortDescription;
}
