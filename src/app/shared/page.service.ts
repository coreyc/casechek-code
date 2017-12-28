import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  currentPage: number = 1;

  setPageCount(direction: string) {
    if (direction === 'next') this.currentPage++;
    if (direction === 'previous') this.currentPage--;
  }

  getPageCount() {
    return this.currentPage * 5;
  }
}