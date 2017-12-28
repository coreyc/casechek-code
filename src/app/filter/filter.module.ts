import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterComponent } from './filter.component';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FilterComponent]
})
export class FilterModule { }