import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	signupForm: FormGroup;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder) {

  	this.signupForm = this.fb.group({
  		name: ['', Validators.required],
  		username: ['', Validators.required],
  		password: ['', [Validators.required, Validators.minLength(6)]],
  		email: ['', Validators.required]
  	})
  }

  ionViewDidLoad() {
   
  }

  onSubmit(){
  	console.log(this.signupForm)
  }

}
