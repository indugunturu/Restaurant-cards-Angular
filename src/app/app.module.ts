import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { FooterComponent } from 'src/footer/footer.component';
import { RestoCardsComponent } from './resto-cards/resto-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NgxsModule } from '@ngxs/store';
import { UsersComponent } from './users/users.component';
import { DesignutilityService } from './designutility.service';
import { GeneralComponent } from './general/general.component';
import { AppState } from './state/app.state';
import { RestaurantmeuComponent } from './restaurantmeu/restaurantmeu.component';

@NgModule({


  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RestoCardsComponent,
    AboutComponent,
    UsersComponent,
    GeneralComponent,
    RestaurantmeuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
