import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
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
