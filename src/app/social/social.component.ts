import { Component } from '@angular/core';
import { Styles } from '@fortawesome/fontawesome-svg-core';
import { linkedinLink } from '../strings/social';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  faLinkedin = faLinkedin


  linkedinLink = linkedinLink

  style: Styles = {
    height: '40px',
    width: '40px',
  }
}
