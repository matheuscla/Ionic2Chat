import { NavController, AlertController, App, MenuController } from 'ionic-angular';
import { AuthService } from './../providers/auth/auth.service';
import { OnInit } from '@angular/core';
import { SigninPage } from '../pages/signin/signin';

export abstract class BaseComponent implements OnInit {
	protected navCtrl: NavController;

	constructor(
		public alertCtrl: AlertController,
		public authService: AuthService,
		public app: App,
		public menuCtrl: MenuController
	) {}

	ngOnInit() {
		this.navCtrl = this.app.getActiveNav();
	}

	onLogout() {
		this.alertCtrl.create({
			message: "Do you want to quit?",
			buttons: [
				{
					text: 'Yes',
					handler: () => {
						this.authService.logout()
							.then(() => {
								this.navCtrl.setRoot(SigninPage)
							})
					}
				},
				{
					text: 'No'
				}
			]
		}).present();
	}
}