import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FighterDetailsComponent } from './fighter-details/fighter-details.component';
import { FighterDetailFormComponent } from './fighter-details/fighter-detail-form/fighter-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterDetailsComponent,
    FighterDetailFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
