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
  readonly default: string = 'Click to copy'
  tooltipText: string = this.default

  handleEmailClick = () => {
    this.tooltip.show()
    this.tooltipText = "Copied!"

    setTimeout(() => {
      this.tooltip.hide()
    }, 1000)

    setTimeout(() => {
      this.tooltipText = this.default
    }, 2000)
  }
}
