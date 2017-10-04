import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from './../../models/user.model';
import { UserService } from './../../providers/user/user.service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  messages: string[] = [];
  pageTitle: string;
  sender: User;
  recipient: User;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public authService: AuthService,
    public userService: UserService) {
  }

  ionViewCanEnter(): Promise<boolean> {
  	return this.authService.authenticated;
  }

  sendMessage(newMessage: string): void {
    this.messages.push(newMessage);
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;

    this.userService.currentUser
      .first()
      .subscribe(currentUser => this.sender = currentUser);
  }

}
