import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FighterDetailFormComponent} from "./fighter-details/fighter-detail-form/fighter-detail-form.component";
import {FighterDetailsComponent} from "./fighter-details/fighter-details.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FighterEditFormComponent} from "./fighter-details/fighter-edit-form/fighter-edit-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createFighter', component: FighterDetailFormComponent },
  { path: 'listOfFighters', component: FighterDetailsComponent },
  { path: 'detail/:id', component: FighterEditFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
