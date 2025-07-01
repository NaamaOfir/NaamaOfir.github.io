import { Component, Input } from '@angular/core';
import { email } from '../strings/about';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  @Input() onCopyClick?: () => void
  email = email
  readonly faEnvelope = faEnvelope
  readonly faLinkedin = faLinkedin

  copyEmailToClipboard = (event: MouseEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(this.email)
    console.log('copyEmailToClipboard')

    this.onCopyClick?.()
  }
}
