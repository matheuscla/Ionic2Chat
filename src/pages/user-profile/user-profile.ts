import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../providers/auth/auth.service';
import { UserService } from './../../providers/user/user.service';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  currentUser;
  canEdit: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public userService: UserService
  ) {
  }

  ionViewDidLoad() {
    this.userService.currentUser
      .subscribe(user => this.currentUser = user);
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

}