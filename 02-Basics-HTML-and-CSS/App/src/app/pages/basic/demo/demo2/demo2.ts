import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-demo2',
	templateUrl: 'demo2.html',
})
export class Demo2Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('Demo2Page::constructor');
	}

	ionViewDidLoad() {
		console.log('Demo2Page::ionViewDidLoad');
	}

}
