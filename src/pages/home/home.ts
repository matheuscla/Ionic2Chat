import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
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
  chats: FirebaseListObservable<Chat[]>;
  view: string = "chats";

  constructor(
    public chatService: ChatService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public usersService: UserService,
    public authService: AuthService) {

  }

  ionViewDidLoad() {
    this.chats = this.chatService.chats;
  	this.users = this.usersService.users;
    this.menuCtrl.enable(true, 'user-menu');
  }

  filterItems(event) {
    let searchTerm: string = event.target.value;

    this.chats = this.chatService.chats;
  	this.users = this.usersService.users;

    if (searchTerm) {
      switch(this.view) {
        case 'chats':
          this.chats = <FirebaseListObservable<Chat[]>>this.chats.map(chats => {
             return chats.filter(chat => {
               return (chat.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
             })
          })
          break;
        case 'users':
          this.users = <FirebaseListObservable<User[]>>this.users.map(users => {
             return users.filter(user => {
               return (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
             })
          })
          break
      }
    }
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

  onChatOpen(chat: Chat) {
    let recipientUserId: string = chat.$key;

    this.usersService.getUserById(recipientUserId)
      .first()
      .subscribe(user =>  {
        this.navCtrl.push(ChatPage, {
          recipientUser: user
        })
      })
  }
}
