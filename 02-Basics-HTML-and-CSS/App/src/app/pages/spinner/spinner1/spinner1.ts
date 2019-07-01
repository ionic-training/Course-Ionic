import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-spinner1',
	templateUrl: 'spinner1.html',
})
export class Spinner1Page {

	paused: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Spinner1Page');
	}

	toggleState() {
		this.paused = !this.paused;
	  }

}
