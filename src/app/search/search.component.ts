import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  fetchData(initialSearch: string) {
    this.restaurantService
      .fetchRestaurants(initialSearch).then(() => { this.router.navigate(['filter']); });
  }
}
