import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav_proto';
  showFiller = true;
  opened: boolean = false;
  screenWidth: number = 0;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    if (this.screenWidth > 599) {
      this.showFiller = false
      this.opened = true;
    }
  }
}
