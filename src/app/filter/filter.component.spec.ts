import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './filter.component';
import { RestaurantService } from '../shared/restaurant.service';
import { PageService } from '../shared/page.service';
import { FilterPipe } from '../shared/filter.pipe';

import { restaurantServiceMock } from '../shared/mocks';
import { DebugContext } from '@angular/core/src/view';

describe('FilterComponent', () => {

  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let inputEl: DebugElement;
  let nextBtnEl: DebugElement;
  let prevBtnEl: DebugElement;
  let pageService: PageService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      declarations: [FilterComponent, FilterPipe],
      providers: [
        { provide: RestaurantService, useValue: restaurantServiceMock },
        MockBackend,
        BaseRequestOptions,
        PageService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();

    pageService = TestBed.get(PageService);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    inputEl = fixture.debugElement.query(By.css('input'));
    nextBtnEl = fixture.debugElement.query(By.css('button[name=next]'));
    prevBtnEl = fixture.debugElement.query(By.css('button[name=previous]'));
  });

  describe('ngOnInit()', () => {
    it('should fetch restaurants for component', () => {
      expect(component.restaurants.length).toBe(11);
    });
  });

  describe('next()', () => {
    it('should go forward', () => {
      component.next();
      expect(component.pagedItems).toEqual([
        {'name': 'San Diego Pizza', 'id': '456'},
        {'name': 'Atlanta Pizza', 'id': '456'},
        {'name': 'Italian Pizza', 'id': '123'},
        {'name': 'Deep Dish Pizza', 'id': '456'},
        {'name': 'Fun Pizza', 'id': '123'}
      ])
    });

    it('should not be able to go forward', () => {
      component.next();
      component.next();
      expect(nextBtnEl.nativeElement.disabled).toBeDefined();
    });
  });

  describe('previous()', () => {
    it('should go backward', () => {
      component.next();
      component.previous();
      expect(component.pagedItems).toEqual([
        {'name': 'Chicago Pizza', 'id': '123'},
        {'name': 'Orlando Pizza', 'id': '456'},
        {'name': 'Philly Pizza', 'id': '123'},
        {'name': 'Boston Pizza', 'id': '456'},
        {'name': 'LA Pizza', 'id': '123'}
      ])
    });

    it('should not be able to go backward', () => {
      expect(prevBtnEl.nativeElement.disabled).toBeDefined();
    });
  });

  describe('goToDetail()', () => {
    it('should go go to detail view upon clicking restaurant card', () => {
      const navSpy = spyOn(router, 'navigate');
      component.goToDetail('123456');
      expect(navSpy).toHaveBeenCalledWith(['/detail', '123456']);
    });

  });
});

