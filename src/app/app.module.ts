import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, XHRBackend, Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

import { AppRoutingModule } from './app-routing.module';

import { RestaurantService } from './shared/restaurant.service';
import { PageService } from './shared/page.service';
import { RouteGuard } from './shared/routeGuard.service';
import { FilterPipe} from './shared/filter.pipe';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new Http(xhrBackend, requestOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    DetailItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    RestaurantService,
    PageService,
    RouteGuard,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
