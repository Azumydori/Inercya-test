import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { EmployeeCardProfileComponent } from './components/employee-card-profile/employee-card-profile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent,
    EmployeeCardComponent,
    ProfileInfoComponent,
    CommentSectionComponent,
    EmployeeCardProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent,
    EmployeeCardComponent,
    ProfileInfoComponent,
    CommentSectionComponent,
    EmployeeCardProfileComponent
  ]
})
export class SharedModule { }
