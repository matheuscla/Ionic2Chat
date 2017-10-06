import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../providers/user/user.service';
import { MessageService } from '../../providers/message/message.service';
import { ChatService } from '../../providers/chat/chat.service';
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
  private chat1;
  private chat2;


  constructor(
    public chatService: ChatService,
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
      let currentTimestamp = firebase.database.ServerValue.TIMESTAMP;

      this.messageService
        .create(new Message(this.sender.$key, newMessage, currentTimestamp), this.messages)
        .then(() => {
          this.chat1
            .update({lastMessage: newMessage, timestamp: currentTimestamp});

          this.chat2
            .update({lastMessage: newMessage, timestamp: currentTimestamp});
        })

    }
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;

    this.userService.currentUser
      .first()
      .subscribe(currentUser => {
        this.sender = currentUser;

        this.chat1 = this.chatService.getDeepChat(this.sender.$key, this.recipient.$key);
        this.chat2 = this.chatService.getDeepChat(this.recipient.$key, this.sender.$key);

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
