import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialbarComponent } from './components/socialbar/socialbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardinfoComponent } from './components/cardinfo/cardinfo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardAboutUsComponent } from './components/card-about-us/card-about-us.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialbarComponent,
    SliderComponent,
    CardinfoComponent,
    FooterComponent,
    CardAboutUsComponent,
    CardProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
