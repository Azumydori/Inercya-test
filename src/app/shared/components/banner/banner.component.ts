import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  hideBanner: boolean;

  constructor(private router: Router) {
    this.hideBanner = this.router.url === '/profile-page';
    router.events.subscribe((val) => {
      this.hideBanner = this.router.url === '/profile-page';
    });
  }
}
