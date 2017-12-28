import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestaurantService {
  restaurants: Array<Object>;

  constructor(private http: Http) { }

  fetchRestaurants(initialSearch?: string): Promise<Array<Object>> {
    return this.http
      .get('https://data.cityofchicago.org/resource/cwig-ma7x.json')
      .toPromise()
      .then((res: Response) => {
        const restaurantList = res.json()
          .map(restaurant => {
            return {
              address: restaurant.address,
              name: restaurant.aka_name,
              city: restaurant.city,
              type: restaurant.facility_type,
              inspection_date: restaurant.inspection_date,
              inspection_id: restaurant.inspection_id,
              license: restaurant.license,
              results: restaurant.results,
              risk: restaurant.risk,
              state: restaurant.state,
              violations: restaurant.violations,
              zip: restaurant.zip
            }
          })
          .filter(restaurant => { if (restaurant.name) return restaurant.name.toUpperCase().includes(initialSearch) })
        this.restaurants = restaurantList;
        return restaurantList;
      })
      .catch(this.handleError);
  }

  getRestaurants() {
    console.log('getRestaurants', this.restaurants);
    return this.restaurants;
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }

}