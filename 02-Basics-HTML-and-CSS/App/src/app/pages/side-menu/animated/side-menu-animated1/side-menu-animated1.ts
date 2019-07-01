import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { AppState } from './../../../../app/app.global';

@IonicPage()
@Component({
	selector: 'page-side-menu-animated1',
	templateUrl: 'side-menu-animated1.html',
})
export class SideMenuAnimated1Page {

	demo: string = "1";

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public platform: Platform,
		public global: AppState
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuAnimated1Page');
	}

	changeTheme(theme) {
		this.global.set('theme', theme);
	  }

	  segmentTapped() {
		  console.log('segmentTapped: ' + this.demo);
	  }
}
