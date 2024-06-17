import { Component } from '@angular/core';
import { email } from '../strings/about';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  email = email

  copyIcon = faCopy

  style = {
    height: '40px',
    width: '40px',
  }

  copyEmailToClipboard(event: MouseEvent): void {
    event.preventDefault();
    navigator.clipboard.writeText(this.email)
  }
}
