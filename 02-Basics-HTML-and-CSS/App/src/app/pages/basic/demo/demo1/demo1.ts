import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-demo1',
	templateUrl: 'demo1.html',
})
export class Demo1Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('Demo1Page::constructor');
	}

	ionViewDidLoad() {
		console.log('Demo1Page::ionViewDidLoad');
	}

}
