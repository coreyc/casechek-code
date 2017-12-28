import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  fetchRestaurants(): Observable<any> {
    return this.http.get('https://data.cityofchicago.org/resource/cwig-ma7x.json')
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }

}