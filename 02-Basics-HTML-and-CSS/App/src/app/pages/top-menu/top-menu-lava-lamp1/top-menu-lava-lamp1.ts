import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-top-menu-lava-lamp1',
	templateUrl: 'top-menu-lava-lamp1.html',
})
export class TopMenuLavaLamp1Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TopMenuLavaLamp1Page');
	}

}
