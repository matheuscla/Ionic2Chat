import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  FirebaseListObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { SignupPage } from '../signup/signup';
import { UserService }  from '../../providers/user/user.service';
import { AuthService }  from '../../providers/auth/auth.service';
import { ChatPage } from '../../pages/chat/chat';
import { ChatService } from '../../providers/chat/chat.service'
import { Chat } from '../../models/chat.model';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: FirebaseListObservable<User[]>;
  view: string = "chats";

  constructor(
    public chatService: ChatService,
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

  onChatCreate(recipientUser) {
    this.usersService.currentUser
      .first()
      .subscribe(currentUser => {
        this.chatService.getDeepChat(currentUser.$key, recipientUser.$key)
          .first()
          .subscribe(chat => {
            if (chat.hasOwnProperty('$value')) {
              let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

              let chat1 = new Chat('', timestamp, recipientUser.name, '');
              this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

              let chat2 = new Chat('', timestamp, currentUser.name, '');
              this.chatService.create(chat2, recipientUser.$key, currentUser.$key);

            }
          });
      })

  	this.navCtrl.push(ChatPage, {
      recipientUser: recipientUser
    })
  }
}
