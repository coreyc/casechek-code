import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from "@angular/platform-browser";

import { SearchComponent } from './search.component';
import { RestaurantService } from '../shared/restaurant.service';

describe('SearchComponent', () => {

  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputEl: DebugElement;
  let buttonEl: DebugElement;

  const restaurantListMock = {
    fetchRestaurants: jasmine.createSpy('fetchRestaurants')
  };

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([
          { path: 'search', component: SearchComponent }
        ])
      ],
      declarations: [SearchComponent],
      providers: [
        { provide: RestaurantService, useValue: restaurantListMock},
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.debugElement.componentInstance;

    inputEl = fixture.debugElement.query(By.css('input'));
    buttonEl = fixture.debugElement.query(By.css('button'));
  });

  describe('fetchData()', () => {
    xit('should get data from restaurant service from search query', () => {
      component.fetchData('pizza');
      fixture.detectChanges();
      expect(router.navigate).toHaveBeenCalled();
    });
  });
});
;