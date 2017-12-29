import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DetailItemComponent } from './detail-item.component';

@NgModule({
  declarations: [
    DetailItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DetailItemComponent]
})
export class DetailItemModule { }