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
import { ProjectComponent } from './components/project/project.component';
import { CardContactUsComponent } from './components/card-contact-us/card-contact-us.component';
import { FormsModule } from '@angular/forms';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { DialogInfoProjectComponent } from './components/dialog-info-project/dialog-info-project.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CardVolunteersComponent } from './components/card-volunteers/card-volunteers.component';
import { CardDonationsComponent } from './components/card-donations/card-donations.component';
import { CardHealthTrainingComponent } from './components/card-health-training/card-health-training.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialbarComponent,
    SliderComponent,
    CardinfoComponent,
    FooterComponent,
    CardAboutUsComponent,
    CardProjectsComponent,
    ProjectComponent,
    CardContactUsComponent,
    FloatingButtonComponent,
    DialogInfoProjectComponent,
    CardVolunteersComponent,
    CardDonationsComponent,
    CardHealthTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
