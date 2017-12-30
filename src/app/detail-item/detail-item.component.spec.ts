import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { DetailItemComponent } from './detail-item.component';
import { RestaurantService } from '../shared/restaurant.service';

describe('DetailItemComponent', () => {

  let component: DetailItemComponent;
  let fixture: ComponentFixture<DetailItemComponent>;
  let cardEl: DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([
          { path: 'detail', component: DetailItemComponent }
        ])
      ],
      declarations: [DetailItemComponent],
      providers: [RestaurantService]
    });

    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;

    cardEl = fixture.debugElement.query(By.css('.detail-card'));
  });

  describe('component initialization', () => {
    // false positive- fix
    it('should fetch the data for selected item', () => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.detailInfo).toBeDefined();
    });
  });
});
;