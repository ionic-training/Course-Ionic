import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ListDetailsPage1 } from "./list-details.page";

const routes: Routes = [{ path: "", component: ListDetailsPage1 }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDetailsPage1]
})
export class ListDetailsPageModule1 {}
