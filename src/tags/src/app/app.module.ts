import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { SingleTagComponent } from './single-tag/single-tag.component';
import { FormTagComponent } from './form-tag/form-tag.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TagListService} from "./tag-list/service/tag-list.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    TagListComponent,
    SingleTagComponent,
    FormTagComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [TagListService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
