import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RestoCardsComponent } from './resto-cards/resto-cards.component';
import { GeneralComponent } from './general/general.component';
import { RestaurantmeuComponent } from './restaurantmeu/restaurantmeu.component';

  const routes: Routes = [
    { path: '', component: RestoCardsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: GeneralComponent },
    { path: 'restaurants/:resId', component: RestaurantmeuComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
