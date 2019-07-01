import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MainApp } from './app.component';
import { AppState } from './app.global';

import { HomePage } from './../pages/basic/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [MainApp, HomePage],
	imports: [BrowserModule, IonicModule.forRoot(MainApp),],
	bootstrap: [IonicApp],
	entryComponents: [MainApp, HomePage],
	providers: [StatusBar, SplashScreen, AppState,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
