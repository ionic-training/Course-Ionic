import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListJSONPageRoutingModule } from './tabs-json.router.module';

import { TabsJSONPage }       from './tabs-json.page';
import { ListJSONPageModule } from '../list-json/list-json.module';
import { GridJSONPageModule } from '../grid-json/grid-json.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListJSONPageRoutingModule,
    ListJSONPageModule,
    GridJSONPageModule
  ],
  declarations: [TabsJSONPage]
})
export class TabsJSONPageModule {}
