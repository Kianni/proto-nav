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
  showFiller: boolean = true;
  opened: boolean = false;
  screenWidth: number = 0;

  constructor(private dialog: MatDialog) {
    this.onResize();
  }

  // different layout depending on desktop/mobile screen size
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    if (this.screenWidth > 599) {
      this.showFiller = false
      this.opened = true;
    }
  }

  onLogin() {
    this.dialog.open(LogoutDialog);
  }
}
