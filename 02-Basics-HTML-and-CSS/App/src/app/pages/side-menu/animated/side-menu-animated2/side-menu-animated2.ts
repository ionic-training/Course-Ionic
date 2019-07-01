import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-animated2',
	templateUrl: 'side-menu-animated2.html',
})
export class SideMenuAnimated2Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuAnimated2Page');
	}

}
