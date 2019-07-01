import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-drop-down1',
	templateUrl: 'dropdown1.html',
})
export class SideMenuDropDown1Page {

	menu = [
		{
			'name': 'First Menu',
			'items': [
				{ 'name': '11', 'icon': 'clock', 'link': 'link' },
				{ 'name': '12', 'icon': 'clock', 'link': 'link' },
				{ 'name': '13', 'icon': 'clock', 'link': 'link' },
				{ 'name': '14', 'icon': 'clock', 'link': 'link' },
			]
		},
		{
			'name': 'Second Menu',
			'items': [
				{ 'name': '21', 'icon': 'clock', 'link': 'link' },
				{ 'name': '22', 'icon': 'clock', 'link': 'link' },
				{ 'name': '23', 'icon': 'clock', 'link': 'link' },
				{ 'name': '24', 'icon': 'clock', 'link': 'link' },
			]
		},
		{
			'name': 'Third Menu',
			'items': [
				{ 'name': '31', 'icon': 'clock', 'link' : 'link'},
				{ 'name': '32', 'icon': 'clock', 'link' : 'link'},
				{ 'name': '33', 'icon': 'clock', 'link' : 'link'},
			]
		},
	]

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('SideMenuDropDown1Page::constructor')
		/*
		this.menu.forEach(element => {
			let name = element.name;

			element.items.forEach(item => {
				console.log('menu: ' + name + ' --> ' + item.name)
			});
		});
		*/
	}

	ionViewDidLoad() {
		console.log('SideMenuDropDown1Page::ionViewDidLoad');
	}

}
