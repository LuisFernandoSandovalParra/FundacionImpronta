import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardinfoComponent } from './components/cardinfo/cardinfo.component';
import { CardAboutUsComponent } from './components/card-about-us/card-about-us.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { CardContactUsComponent } from './components/card-contact-us/card-contact-us.component';
import { CardVolunteersComponent } from './components/card-volunteers/card-volunteers.component';
import { CardDonationsComponent } from './components/card-donations/card-donations.component';
import { CardHealthTrainingComponent } from './components/card-health-training/card-health-training.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: CardinfoComponent },
  { path: 'nosotros', component: CardAboutUsComponent },
  { path: 'proyectos', component: CardProjectsComponent },
  { path: 'voluntarios', component: CardVolunteersComponent },
  { path: 'contactanos', component: CardContactUsComponent },
  { path: 'donaciones', component: CardDonationsComponent },
  { path: 'salud', component: CardHealthTrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
