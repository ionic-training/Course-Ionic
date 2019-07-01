import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-circular1',
	templateUrl: 'circular1.html',
})
export class SideMenuCircular1Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuCircular1Page');
	}

}
