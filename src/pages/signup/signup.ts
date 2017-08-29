import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../providers/user/user.service';
import { AuthService } from './../../providers/auth/auth.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	signupForm: FormGroup;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
    public userService: UserService,
    public authService: AuthService) {

  	this.signupForm = this.fb.group({
  		name: ['', Validators.required],
  		username: ['', Validators.required],
  		password: ['', [Validators.required, Validators.minLength(6)]],
  		email: ['', Validators.required]
  	})
  }

  ionViewDidLoad() {
   
  }

  onSubmit() {


    let formUser = this.signupForm.value;
    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password
    }).then(authState => {
          this.userService.createUser(this.signupForm.value)
      .then( () => console.log("User created"))
    })
  }

}
