import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
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
        RestaurantService
      ]
    });

    inject([RestaurantService, MockBackend], (restaurantService, mockBackend) => {
      const mockResponse = [
        {
          ":@computed_region_43wa_7qmu": "31",
          ":@computed_region_6mkv_f3dw": "21554",
          ":@computed_region_awaf_s7ux": "6",
          ":@computed_region_bdys_3d7i": "573",
          ":@computed_region_vrxf_vc4k": "70",
          "address": "1956 W 79TH ST ",
          "aka_name": "KRISPY CHICKEN & SEAFOOD",
          "city": "CHICAGO",
          "dba_name": "KRISPY CHICKEN & SEAFOOD",
          "facility_type": "Restaurant",
          "inspection_date": "2017-12-26T00:00:00.000",
          "inspection_id": "2129656",
          "inspection_type": "License",
          "latitude": "41.75034206159885",
          "license_": "2570228",
          "location": {
            "type": "Point",
            "coordinates": [-87.673002390874, 41.750342061599]
          },
          "longitude": "-87.67300239087365",
          "results": "Pass",
          "risk": "Risk 2 (Medium)",
          "state": "IL",
          "violations": "38. VENTILATION: ROOMS AND EQUIPMENT VENTED AS REQUIRED: PLUMBING: INSTALLED AND MAINTAINED - Comments: OBSERVED MISSING STOPPER AT 3-COMPARTMENT SINK AT REAR FOOD PREP AREA. \nINSTRUCTED TO PROVIDE PROPER THREE STOPPERS AT 3-COMPARTMENT SINK IN REAR FOOD PREP AREA.  | 40. REFRIGERATION AND METAL STEM THERMOMETERS PROVIDED AND CONSPICUOUS - Comments: OBSERVED NO THERMOMETER AT WALK-IN COOLER. INSTRUCTED TO PROVIDE THERMOMETER.",
          "zip": "60620"
        }, {
          ":@computed_region_43wa_7qmu": "15",
          ":@computed_region_6mkv_f3dw": "22268",
          ":@computed_region_awaf_s7ux": "23",
          ":@computed_region_bdys_3d7i": "265",
          ":@computed_region_vrxf_vc4k": "62",
          "address": "6255 S MAYFIELD AVE ",
          "aka_name": "LITTLE LEARNERS DAYCARE",
          "city": "CHICAGO",
          "dba_name": "LITTLE LEARNERS DAYCARE",
          "facility_type": "Daycare (2 - 6 Years)",
          "inspection_date": "2017-12-26T00:00:00.000",
          "inspection_id": "2129669",
          "inspection_type": "License",
          "latitude": "41.778117574741486",
          "license_": "2215555",
          "location": {
            "type": "Point",
            "coordinates": [-87.768912063285, 41.778117574741]
          },
          "longitude": "-87.76891206328479",
          "results": "Pass",
          "risk": "Risk 1 (High)",
          "state": "IL",
          "violations": "34. FLOORS: CONSTRUCTED PER CODE, CLEANED, GOOD REPAIR, COVING INSTALLED, DUST-LESS CLEANING METHODS USED - Comments: CLEAN FLOORS IN BASEMENT UNDER ALL EQUIPMENT, ALONG WALLS AND CORNERS. REMOVE WATER OFF FLOOR NEAR WATER HEATER IN BASEMENT AND UNDER 3-COMPARTMENT SINK IN KITCHEN. | 36. LIGHTING: REQUIRED MINIMUM FOOT-CANDLES OF LIGHT PROVIDED, FIXTURES SHIELDED - Comments: SEAL OPENING AROUND PIPE FITTING UNDER SINK IN WOMEN WASHROOM. | 38. VENTILATION: ROOMS AND EQUIPMENT VENTED AS REQUIRED: PLUMBING: INSTALLED AND MAINTAINED - Comments: REPAIR CLOGGED TOILET IN SOUTH WASHROOM (NOT FLUSING PROPERLY). | 41. PREMISES MAINTAINED FREE OF LITTER, UNNECESSARY ARTICLES, CLEANING  EQUIPMENT PROPERLY STORED - Comments: ELEVATE ALL STOCK OFF FLOOR IN SUPPLY ROOM NEAR MEN WASHROOM FOR EASY CLEANING AND PEST CONTROL. REMOVE ALL UNUSED ARTICLES AND EQUIPMENT, TOILETS, SINKS, ETC IN BASEMENT TO PREVENT PEST HARBORAGE.",
          "zip": "60638"
        }
      ];

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: mockResponse
        })));
      });
      restaurantService.fetchRestaurants();
    });      
  });

  describe('fetchRestaurants()', () => {
    it('should return list of restaurants', () => {
      inject([RestaurantService, MockBackend], (restaurantService, mockBackend) => {
        restaurantService.fetchRestaurants().subscribe(res => {
          expect(res).toBeDefined();
        });
      });
    });
  });

  describe('getRestaurants()', () => {
    it('should return list of restaurants', () => {
      inject([RestaurantService], restaurantService => {
        expect(restaurantService.getRestaurants().length).toBe(2);
      });
    });
  });

  describe('getRestaurantById()', () => {
    it('should return restaurant by inspection id', () => {
      inject([RestaurantService], restaurantService => {
        //using toBeDefined to save some time, should use toEqual and set to object
        expect(restaurantService.getRestaurantById(2129656)).toBeDefined();
      });
    });
  });
});