import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent,
    EmployeeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent,
    EmployeeCardComponent
  ]
})
export class SharedModule { }
