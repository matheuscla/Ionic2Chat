import { Component, Input } from '@angular/core';
import { BaseComponent } from './../base.component';
import { NavController, AlertController, App, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { UserProfilePage } from './../../pages/user-profile/user-profile';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})

export class UserMenuComponent extends BaseComponent {
  @Input('user') currentUser;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile() {
    this.navCtrl.push(UserProfilePage);
  }

}
