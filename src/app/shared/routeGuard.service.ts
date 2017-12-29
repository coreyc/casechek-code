import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './restaurant.service';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(
    private restaurantService: RestaurantService,
    protected router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.restaurantService.getRestaurants()) {
      return true;
    } else {
      this.router.navigate(['search']);
      return false;
    }
  }
}