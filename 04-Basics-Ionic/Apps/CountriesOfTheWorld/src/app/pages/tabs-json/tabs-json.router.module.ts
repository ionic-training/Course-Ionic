import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsJSONPage } from './tabs-json.page';
import { ListJSONPage } from '../list-json/list-json.page';
import { GridJSONPage } from '../grid-json/grid-json.page';

const routes: Routes = [
  {
    path: 'list-json-tabs',
    component: ListJSONPage,
    children: [
      { path: 'list', outlet: 'grid', component: ListJSONPage },
      { path: 'grid', outlet: 'grid', component: GridJSONPage }
    ]
  },
  {    path: '',    redirectTo: '/list-json-tabs/(grid:grid)',    pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListJSONPageRoutingModule {}
