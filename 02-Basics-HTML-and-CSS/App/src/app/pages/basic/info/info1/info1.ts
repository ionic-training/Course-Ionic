import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-info1',
	templateUrl: 'info1.html',
})
export class Info1Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('Info1Page::constructor');
	}

	ionViewDidLoad() {
		console.log('Info1Page::ionViewDidLoad');
	}

}
