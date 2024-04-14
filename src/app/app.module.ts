import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './inercya/pages/home-page/home-page.component';
import { ProfilePageComponent } from './inercya/pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
