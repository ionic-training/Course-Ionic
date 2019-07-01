import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "home", loadChildren: "./pages/home/home.module#HomePageModule" },
	{ path: "list", loadChildren: "./pages/list/list.module#ListPageModule" },
	{
		path: "css01",
		loadChildren: "./pages/css01/css01.module#CSS01PageModule"
	},
	{ path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
