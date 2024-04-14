import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
    ProfilePageComponent
  ]
})
export class InercyaModule { }
