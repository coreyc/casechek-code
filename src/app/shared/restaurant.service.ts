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
    const undefChecker = (prop: string) => prop ? prop : '';
    return this.http
      .get('https://data.cityofchicago.org/resource/cwig-ma7x.json')
      .toPromise()
      .then((res: Response) => {
        const restaurantList = res.json()
          .map((restaurant: any) => {
            return {
              address: undefChecker(restaurant.address),
              name: undefChecker(restaurant.aka_name),
              city: undefChecker(restaurant.city),
              type: undefChecker(restaurant.facility_type),
              inspection_date: undefChecker(restaurant.inspection_date),
              inspection_id: undefChecker(restaurant.inspection_id),
              license: undefChecker(restaurant.license),
              results: undefChecker(restaurant.results),
              risk: undefChecker(restaurant.risk),
              state: undefChecker(restaurant.state),
              violations: undefChecker(restaurant.violations),
              zip: undefChecker(restaurant.zip)
            };
          })
          .filter((restaurant: any) => {
            if (restaurant.name) {
              return restaurant.name.toUpperCase().includes(initialSearch.toUpperCase());
            }
          });
        this.restaurants = restaurantList;
        return restaurantList;
      })
      .catch(this.handleError);
  }

  getRestaurants() {
    return this.restaurants;
  }

  getById(id: string) {
    return this.restaurants.filter((restaurant: any) => {
      return restaurant.inspection_id === id;
    }).pop();
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }

}
