import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { Subscription } from 'rxjs/Subscription';
import { debug } from 'util';

@Component({
  selector: 'detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent {
  detailInfo: Object;
  
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.detailInfo = this.restaurantService.getById(param.id);
    });
  }
}
