import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card-profile',
  templateUrl: './employee-card-profile.component.html',
  styleUrl: './employee-card-profile.component.scss'
})
export class EmployeeCardProfileComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToProfilePage() {
    this.router.navigate(['/profile-page']);
  }

  isClicked: boolean = false;

  toggleColor() {
    this.isClicked = !this.isClicked;
  }

}
