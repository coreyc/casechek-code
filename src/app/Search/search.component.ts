import { Component } from '@angular/core';
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

  fetchData() {
    const rs = this.restaurantService;
    const list = rs.setRestaurants().then(() => rs.getRestaurants())
    console.log('list', list);
    this.router.navigate(['filter']);
  }
}
