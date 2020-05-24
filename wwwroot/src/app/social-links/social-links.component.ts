import { Component, OnInit } from '@angular/core';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  faGithubAlt = faGithubAlt;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
