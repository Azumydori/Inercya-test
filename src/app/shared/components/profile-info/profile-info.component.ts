import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent {

  isClicked: boolean = false;

  toggleColor() {
    this.isClicked = !this.isClicked;
  }
}
