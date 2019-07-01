import { NgModule }                         from "@angular/core";
import { BrowserModule }                    from "@angular/platform-browser";
import { RouterModule, RouteReuseStrategy } from "@angular/router";
import { Routes }                           from "@angular/router";

import { IonicModule, IonicRouteStrategy }  from "@ionic/angular";
import { SplashScreen }                     from "@ionic-native/splash-screen/ngx";
import { StatusBar }                        from "@ionic-native/status-bar/ngx";

import { HttpClient }                       from "@angular/common/http";
import { HttpClientModule }                 from "@angular/common/http";

import { AppComponent }                     from "./app.component";
import { AppRoutingModule }                 from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
