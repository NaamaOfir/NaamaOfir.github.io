import { Component, Input } from '@angular/core';
import { email } from '../strings/about';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  @Input() onCopyClick!: () => void
  email = email

  // copyIcon = faCopy

  // style = {
  //   height: '40px',
  //   width: '40px',
  // }

  copyEmailToClipboard = (event: MouseEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(this.email)
    this.onCopyClick()
  }
}
