import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../providers/user/user.service';
import { MessageService } from '../../providers/message/message.service';
import firebase from 'firebase';
import { Message } from './../../models/message.model';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  messages;
  pageTitle: string;
  sender: User;
  recipient: User;

  constructor(
    public messageService: MessageService,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public authService: AuthService,
    public userService: UserService) {
  }

  ionViewCanEnter(): Promise<boolean> {
  	return this.authService.authenticated;
  }

  sendMessage(newMessage: string): void {
    if (newMessage) {
      let timestamp = firebase.database.ServerValue.TIMESTAMP;

      this.messageService
        .create(new Message(this.sender.$key, newMessage, timestamp), this.messages);

    }
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;

    this.userService.currentUser
      .first()
      .subscribe(currentUser => {
        this.sender = currentUser
        this.messages = this.messageService
          .getMessages(this.sender.$key, this.recipient.$key);

        this.messages
          .first()
          .subscribe(messages => {
            if (messages.length == 0) {
              this.messages = this.messageService
                .getMessages(this.recipient.$key, this.sender.$key);
            }
          })
      });
  }

}
