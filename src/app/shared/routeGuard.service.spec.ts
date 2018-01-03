import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RestaurantService } from './restaurant.service';
import { RouteGuard } from './routeGuard.service';

class RouterStub {
  navigate(url: string) {
    return url;
  }
}

describe('RouteGuardService', () => {
  let routeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        RestaurantService,
        RouteGuard,
        {
          provide: Router,
          useClass: RouterStub
        }
      ]
    });
    routeGuard = TestBed.get(RouteGuard);
  });

  describe('canActivate()', () => {
    it('should not let route activate if restaurant endpoint has not yet been called', () => {
      expect(routeGuard.canActivate()).toBe(false);
    });
  });
});
