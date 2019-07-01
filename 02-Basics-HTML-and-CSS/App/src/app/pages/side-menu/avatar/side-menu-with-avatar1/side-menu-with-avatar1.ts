import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-with-avatar1',
	templateUrl: 'side-menu-with-avatar1.html',
})
export class SideMenuWithAvatar1Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuWithAvatar1Page');
	}

}
