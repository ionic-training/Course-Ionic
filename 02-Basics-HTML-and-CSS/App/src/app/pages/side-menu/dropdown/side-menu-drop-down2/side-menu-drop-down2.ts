import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-side-menu-drop-down2',
	templateUrl: 'side-menu-drop-down2.html',
})
export class SideMenuDropDown2Page {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuDropDown2Page');
	}

	/*
	[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
		el.addEventListener('click', onClick, false);
	});
	
	onClick(e){
		e.preventDefault();
		var el = this.parentNode;
		el.classList.contains('show-submenu') ? this.hideSubMenu(el) : this.showSubMenu(el);
	}

	showSubMenu(el){
		el.classList.add('show-submenu');
		document.addEventListener('click', function onDocClick(e){
			e.preventDefault();
			if(el.contains(e.target)){
				return;
			}
			document.removeEventListener('click', onDocClick);
			this.hideSubMenu(el);
		});
	}

	hideSubMenu(el){
		el.classList.remove('show-submenu');
	}
	*/
}
