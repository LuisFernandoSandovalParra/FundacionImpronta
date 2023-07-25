import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardinfoComponent } from './components/cardinfo/cardinfo.component';
import { CardAboutUsComponent } from './components/card-about-us/card-about-us.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { CardContactUsComponent } from './components/card-contact-us/card-contact-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: CardinfoComponent},
  {path: 'nosotros', component: CardAboutUsComponent},
  {path: 'proyectos', component: CardProjectsComponent},
  {path: 'contactanos', component: CardContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
