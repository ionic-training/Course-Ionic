import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',        redirectTo: 'home',    pathMatch: 'full'  },
  { path: 'home',                 loadChildren: './pages/home/home.module#HomePageModule'                             },
  { path: 'list-static',          loadChildren: './pages/list-static/list-static.module#ListStaticPageModule'         },
  { path: 'list-json',            loadChildren: './pages/list-json/list-json.module#ListJSONPageModule'               },
  { path: 'list-restapi',         loadChildren: './pages/list-restapi/list-restapi.module#ListRestAPIPageModule'      },
  { path: 'list-sqlite',          loadChildren: './pages/list-sqlite/list-sqlite.module#ListSQLitePageModule'         },
  { path: 'list-details/:name',   loadChildren: './pages/list-details/1/list-details.module#ListDetailsPageModule1'   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
