import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { PageService } from '../shared/page.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  restaurants: Array<Object>;
  pagedItems;
  filterInput;

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private pageService: PageService
  ) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
    this.setOffset();
  }

  private setOffset() {
    const pageEnd = this.pageService.getPageCount();
    this.pagedItems = this.restaurants.slice(pageEnd - 5, pageEnd);
  }

  previous() {
    this.pageService.setPageCount('previous');
    this.setOffset();
  }

  next() {
    this.pagedItems = this.pageService.setPageCount('next');
    this.setOffset();
  }

  cannotGoNext() {
    return this.pagedItems.length < 5;
  }

  cannotGoPrevious() {
    return this.pageService.getPageCount() === 5;
  }

  goToDetail(id) {
    const link = ['/detail', id];
    this.router.navigate(link);
  }

}
