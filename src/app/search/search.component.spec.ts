import { TestBed, ComponentFixture, inject, fakeAsync, flush } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockBackend } from '@angular/http/testing';

import { SearchComponent } from './search.component';
import { RestaurantService } from '../shared/restaurant.service';

import { restaurantServiceMock } from '../shared/mocks';
import { setTimeout } from 'timers';

describe('SearchComponent', () => {

  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputEl: DebugElement;
  let buttonEl: DebugElement;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [SearchComponent],
      providers: [
        { provide: RestaurantService, useValue: restaurantServiceMock },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    inputEl = fixture.debugElement.query(By.css('input'));
    buttonEl = fixture.debugElement.query(By.css('button'));
  });

  describe('fetchData()', () => {
    it('should go to next page upon fetching restaurant data', fakeAsync(() => {
      const navSpy = spyOn(router, 'navigate')
      component.fetchData('pizza');
      flush();
      expect(navSpy).toHaveBeenCalledWith(['filter']);
    }));
  });
});

