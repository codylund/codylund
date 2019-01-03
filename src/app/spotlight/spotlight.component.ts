import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  email = 'codylund14@gmail.com';
  github = 'github.com/codylund'

  isEmailClicked = false;

  constructor() { }

  ngOnInit() {
  }

  getGitHubPretty(): string {
    return this.github;
  }

  getGitHubFullUrl(): string {
    return "https://" + this.github;
  }
}
