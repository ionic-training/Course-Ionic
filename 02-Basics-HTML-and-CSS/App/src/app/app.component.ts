import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/basic/home/home';

@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;

	placeholder = 'assets/imgs/logo-ionic-toolbox-3.png';
	chosenPicture: any;

	pages: Array<{ title: string, component: any, icon: string }>;

	menu = [
		{
			name: 'Ionic',
			items: [
				{ name: 'Home', icon: 'clock', component: HomePage },
				{ name: 'Info', icon: 'info', component: 'Info1Page' },
				{ name: 'List 1', icon: 'list', component: 'List1Page' },
				{ name: 'List 2', icon: 'list', component: 'List2Page' },
				{ name: 'Demo 1', icon: 'list', component: 'Demo1Page' },
				{ name: 'Demo 2', icon: 'list', component: 'Demo2Page' },
			]
		},
		{
			name: 'Components: Checkbox',
			items: [
				{ name: '1', icon: 'checkbox', component: 'Checkbox1Page' },
				{ name: '2', icon: 'checkbox', component: 'Checkbox2Page' },
			]
		},
		{
			name: 'Avatar',
			items: [
				{ name: '1', icon: 'icon', component: 'SideMenuWithAvatar1Page' },
			]
		},
		{
			name: 'Spinner',
			items: [
				{ name: '1', icon: 'icon', component: 'Spinner1Page' },
			]
		},
		{
			name: 'Animated',
			items: [
				{ name: '1', icon: 'animate', component: 'SideMenuAnimated1Page' },
				{ name: '2', icon: 'animate', component: 'SideMenuAnimated2Page' },
				{ name: '3', icon: 'clock', component: 'SideMenuAnimated3Page' },
				{ name: '4', icon: 'clock', component: 'SideMenuAnimated4Page' },
				{ name: '5', icon: 'clock', component: 'SideMenuAnimated5Page' },
			]
		},
		{
			name: 'Dropdown',
			items: [
				{ name: '1', icon: 'clock', component: 'SideMenuDropDown1Page' },
				{ name: '2', icon: 'clock', component: 'SideMenuDropDown2Page' },
				{ name: '3', icon: 'clock', component: 'SideMenuDropDown3Page' },
				{ name: '4', icon: 'clock', component: 'SideMenuDropDown4Page' },
				{ name: '5', icon: 'clock', component: 'SideMenuDropDown5Page' },
			]
		},
		{
			name: 'Circular',
			'items': [
				{ name: '1', icon: 'clock', component: 'SideMenuCircular1Page' },
				{ name: '2', icon: 'clock', component: 'SideMenuCircular2Page' },
				{ name: '3', icon: 'clock', component: 'SideMenuCircular3Page' },
				{ name: '4', icon: 'clock', component: 'SideMenuCircular4Page' },
				{ name: '5', icon: 'clock', component: 'SideMenuCircular5Page' },
			]
		},
		{
			name: 'Radial',
			'items': [
				{ name: '1', icon: 'clock', component: 'SideMenuCircular1Page' },
				{ name: '2', icon: 'clock', component: 'SideMenuCircular2Page' },
				{ name: '3', icon: 'clock', component: 'SideMenuCircular3Page' },
				{ name: '4', icon: 'clock', component: 'SideMenuCircular4Page' },
				{ name: '5', icon: 'clock', component: 'SideMenuCircular5Page' }
			]
		},
		{
			name: 'Sliding',
			'items': [
				{ name: '1', icon: 'clock', component: 'SideMenuSliding1Page' },
				{ name: '2', icon: 'clock', component: 'SideMenuSliding2Page' },
				{ name: '3', icon: 'clock', component: 'SideMenuSliding3Page' }
			]
		},
		{
			name: 'TopPage Menu',
			'items': [
				{ name: 'Hover 1', icon: 'clock', component: 'TopMenuHoverLine1Page' },
				{ name: 'Hover 2', icon: 'clock', component: 'TopMenuHoverLine2Page' },
				{ name: 'Lava Lamp', icon: 'clock', component: 'TopMenuLavaLamp1Page' }
			]
		},
	]

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		console.log('MainApp::openPage ' + page.component)
		this.nav.setRoot(page.component);
	}
}
