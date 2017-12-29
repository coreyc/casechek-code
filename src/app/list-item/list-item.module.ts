import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListItemComponent } from './list-item.component';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListItemComponent]
})
export class ListItemModule { }