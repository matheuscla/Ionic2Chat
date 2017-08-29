import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	signinForm: FormGroup;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder) {

  	this.signinForm = this.fb.group({
  		password: ['', [Validators.required, Validators.minLength(6)]],
  		email: ['', Validators.required]
  	})
  }


  onSubmit() {
  	console.log(this.signinForm.value)
  }

  onSignUp() {
  	this.navCtrl.push(SignupPage)
  }

}
