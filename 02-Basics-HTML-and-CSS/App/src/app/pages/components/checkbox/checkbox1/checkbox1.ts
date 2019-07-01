import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-checkbox1',
	templateUrl: 'checkbox1.html',
})
export class Checkbox1Page{

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('Checkbox1Page::constructor');
	}

	ionViewDidLoad() {
		console.log('Checkbox1Page::ionViewDidLoad');
	}

}
