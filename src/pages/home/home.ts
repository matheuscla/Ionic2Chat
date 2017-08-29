import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  FirebaseListObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { SignupPage } from '../signup/signup';
import { UserService }  from '../../providers/user/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: FirebaseListObservable<User[]>;

  constructor(public navCtrl: NavController, public usersService: UserService) {

  }

  ionViewDidLoad() {
  	this.users = this.usersService.users;
  }
  
  onSignUp() {
  	this.navCtrl.push(SignupPage);
  }

  onChatCreate(user) {
  	console.log(user);
  }
}
