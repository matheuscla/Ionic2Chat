import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  FirebaseListObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { SignupPage } from '../signup/signup';
import { UserService }  from '../../providers/user/user.service';
import { AuthService }  from '../../providers/auth/auth.service';
import { ChatPage } from '../../pages/chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: FirebaseListObservable<User[]>;
  view: string = "chats";

  constructor(
    public navCtrl: NavController,
    public usersService: UserService,
    public authService: AuthService) {

  }

  ionViewDidLoad() {
  	this.users = this.usersService.users;
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }
  
  onSignUp() {
  	this.navCtrl.push(SignupPage);
  }

  onChatCreate(user) {
  	this.navCtrl.push(ChatPage, {
      recipientUser: user
    })
  }
}
