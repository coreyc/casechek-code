import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  restaurants: Array<object>;
  
  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }
}
