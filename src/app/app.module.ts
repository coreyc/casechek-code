import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

import { RestaurantService } from './shared/restaurant.service';
import { PageService } from './shared/page.service';
import { FilterPipe} from './shared/filter.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [RestaurantService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
