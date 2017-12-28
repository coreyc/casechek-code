import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

import { RestaurantService } from './shared/restaurant.service';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
