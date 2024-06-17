import { Component, ViewChild } from '@angular/core';
import { p1, p2, title } from '../strings/about';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('tooltip') tooltip!: MatTooltip
  title: string = title
  p1: string = p1
  p2: string = p2
  tooltipText: string = 'Copied!'

  handleEmailClick = () => {
    console.log('handleEmailClick')
    this.tooltip.show()
    setTimeout(() => {
      this.tooltip.hide()
    }, 1000)
  }
}
