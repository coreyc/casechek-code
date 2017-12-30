import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantService } from './restaurant.service';
import { RouteGuard } from './routeGuard.service';

describe('RouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {},
        RestaurantService,
        RouteGuard
      ]
    });
  });

  describe('canActivate()', () => {
    it('should not let route activate', () => {
      inject([RouteGuard], routeGuard => {
        expect(routeGuard.canActivate()).toBe(false);
      });
    });
  });
});