import { NavController, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	public name: string;

	constructor(public navCtrl: NavController, private alertController: AlertController) {
    	this.name="Erster Text";
	}

    showName() {
		console.log('HomePage::showName | name=', this.name);

		this.presentAlert("Name", "Der eingegebene Name", this.name)
	}
	

	async presentAlert(header, subheader, message) {
		console.log('HomePage::presentAlert | ', header, subheader, message);
  
		const alert = await this.alertController.create({
		  header: header,
		  subHeader: subheader,
		  message: message,
		  buttons: ['OK']
		});

		console.log('HomePage::presentAlert | done');
		return await alert.present();
	  }
}
