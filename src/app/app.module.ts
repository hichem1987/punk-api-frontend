import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { PopularBeersComponent } from './main/popular-beers/popular-beers.component';
import { FoodPairingComponent } from './main/food-pairing/food-pairing.component';
import { BeerExpertComponent } from './main/beer-expert/beer-expert.component';
import { BeerDetailsComponent } from './main/beer-details/beer-details.component';
import { BeerListComponent } from './main/beer-list/beer-list.component';
import { BeerItemComponent } from './main/beer-list/beer-item/beer-item.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { BeerScrolledListComponent } from './main/beer-scrolled-list/beer-scrolled-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PopularBeersComponent,
    FoodPairingComponent,
    BeerExpertComponent,
    BeerDetailsComponent,
    BeerListComponent,
    BeerItemComponent,
    PageNotFoundComponent,
    NavbarComponent,
    BeerScrolledListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
