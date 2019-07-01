import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-circular2',
	templateUrl: 'side-menu-circular2.html',
})
export class SideMenuCircular2Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuCircular2Page');
	}

}
