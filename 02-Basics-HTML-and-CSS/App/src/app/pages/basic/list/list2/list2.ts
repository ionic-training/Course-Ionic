import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-list',
	templateUrl: 'list2.html'
})
export class List2Page {
	selectedItem: any;
	icons: string[];
	items: Array<{ title: string, note: string, icon: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.selectedItem = navParams.get('item');

		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];
		for (let i = 1; i < 11; i++) {
			this.items.push({
				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
	}

	itemTapped(event, item) {
		this.navCtrl.push(List2Page, {
			item: item
		});
	}
}
