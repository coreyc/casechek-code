import { TestBed, async, inject } from '@angular/core/testing';
import { PageService } from './page.service';

describe('RestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {},
        PageService
      ]
    });
  });

  describe('setPageCount()', () => {
    it('should set page count', () => {
      inject([PageService], pageService => {
        pageService.setPageCount('next');
        expect(pageService.currentPage).toBe(2);
        pageService.setPageCount('previous');
        expect(pageService.currentPage).toBe(1);
      });
    });

    it('should get page count', () => {
      inject([PageService], pageService => {
        expect(pageService.getPageCount()).toBe(1);
      });
    });
  });
});