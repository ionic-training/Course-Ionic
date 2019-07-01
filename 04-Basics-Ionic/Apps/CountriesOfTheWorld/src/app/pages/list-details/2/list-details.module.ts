import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ListDetailsPage2 } from "./list-details.page";

const routes: Routes = [{ path: "", component: ListDetailsPage2 }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDetailsPage2]
})
export class ListDetailsPageModule2 {}
