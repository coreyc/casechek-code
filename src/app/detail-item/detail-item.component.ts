import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent {
  private param: string;
  private subcription: Subscription;
  
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subcription = this.route.queryParams.subscribe((params: Params) => {
      this.param = params['param'];
      this.restaurantService.getByLicense(this.param);
      console.log(this.param);
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
