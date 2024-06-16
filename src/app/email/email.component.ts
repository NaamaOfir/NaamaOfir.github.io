import { Component } from '@angular/core';
import { email } from '../strings/about';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  email = email


  copyEmailToClipboard(event: MouseEvent): void {
    event.preventDefault();
    navigator.clipboard.writeText(this.email)
  }
}
