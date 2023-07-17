import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardinfoComponent } from './components/cardinfo/cardinfo.component';
import { CardAboutUsComponent } from './components/card-about-us/card-about-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: CardinfoComponent},
  {path: 'nosotros', component: CardAboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
