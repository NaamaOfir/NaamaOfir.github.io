import { Component } from '@angular/core';
import { p1, p2, title } from '../strings/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title: string = title
  p1: string = p1
  p2: string = p2
}
