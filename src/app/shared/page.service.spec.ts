import { TestBed, async, inject } from '@angular/core/testing';
import { PageService } from './page.service';

describe('RestaurantService', () => {
  let pageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageService
      ]
    });
    pageService = TestBed.get(PageService);
  });

  describe('setPageCount()', () => {
    it('should set page count', () => {
      pageService.setPageCount('next');
      expect(pageService.currentPage).toBe(2);
      pageService.setPageCount('previous');
      expect(pageService.currentPage).toBe(1);
    });

    it('should get page count', () => {
      expect(pageService.getPageCount()).toBe(5);
    });
  });
});
