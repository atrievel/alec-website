import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss']
})
export class MainDisplayComponent implements OnInit {


  constructor(public router: Router) { }

  shouldDisplay(): boolean {
    const url = this.router.url;
    return this.router.url.indexOf('about') > -1 || url.length === 1;
  }

  ngOnInit(): void {
  }

}
