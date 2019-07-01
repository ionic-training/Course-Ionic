import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-checkbox2',
	templateUrl: 'checkbox2.html',
})
export class Checkbox2Page {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		console.log('Checkbox2Page::constructor');
	}

	ionViewDidLoad() {
		console.log('Checkbox2Page::ionViewDidLoad');
	}

}
