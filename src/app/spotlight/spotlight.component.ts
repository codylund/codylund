import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  platforms = Platform;

  isEmailClicked = false;

  constructor() { }

  ngOnInit() {
  }

  getPlatformText(platform: Platform): string {
    return this.getBaseUrl(platform);
  }

  getFullUrl(platform: Platform): string {
    return 'https://' + this.getBaseUrl(platform);
  }

  getBaseUrl(platform: Platform) {
    switch(platform) {
      case Platform.Email:
        return 'codylund14@gmail.com';
      case Platform.GitHub:
        return 'github.com/codylund';
      case Platform.LinkedIn:
        return 'linkedin.com/in/cody-lund';
    }

    throw new Error(`Platform ${platform} does not have a base URL!`);
  }
}

export enum Platform {
  Email,
  GitHub,
  LinkedIn
}