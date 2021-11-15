import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FighterDetailsComponent } from './fighter-details/fighter-details.component';
import { FighterDetailFormComponent } from './fighter-details/fighter-detail-form/fighter-detail-form.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FighterEditFormComponent } from './fighter-details/fighter-edit-form/fighter-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterDetailsComponent,
    FighterDetailFormComponent,
    DashboardComponent,
    FighterEditFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
