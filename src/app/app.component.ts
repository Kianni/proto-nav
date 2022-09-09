import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LogoutDialog } from 'src/logoutDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav_proto';
  showFiller: boolean;
  opened: boolean;
  screenWidth: number;

  constructor(private dialog: MatDialog) {
    this.showFiller = true;
    this.opened = false;
    this.screenWidth = 0;
    this.onResize();
  }

  // different layout depending on desktop/mobile screen size
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 599) {
      this.showFiller = false
      this.opened = true;
    }
  }

  // hovering extends navbar only on desktop screen
  hoverOnDesktop(showNavBar: boolean) {
    if (this.screenWidth > 599) {
      this.showFiller = showNavBar;
    } else {
      this.showFiller = true;
    }

  }

  onLogin() {
    this.dialog.open(LogoutDialog);
  }
}
