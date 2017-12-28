import { Component } from '@angular/core';
import { RestaurantService } from './shared/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chicago Restaurant Viewer';
  
  constructor(private restaurantService: RestaurantService) { }
}
