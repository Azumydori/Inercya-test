import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonsBannerComponent } from './components/buttons-banner/buttons-banner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent,
    ButtonsBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    BannerComponent,
    ButtonsComponent
  ]
})
export class SharedModule { }
