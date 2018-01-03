import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './shared/routeGuard.service';

import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent, canActivate: [RouteGuard] },
  { path: 'detail/:id', component: DetailItemComponent, canActivate: [RouteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
