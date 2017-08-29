import { Component } from '@angular/core';
import { NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../providers/auth/auth.service';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	signinForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public loadingCrtl: LoadingController,
    public auth: AuthService,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder) {

  	this.signinForm = this.fb.group({
  		password: ['', [Validators.required, Validators.minLength(6)]],
  		email: ['', Validators.required]
  	})
  }

  onSubmit() {
    let loading: Loading = this.showLoading();
    this.auth.signinWithEmail(this.signinForm.value)
      .then((isLogged: boolean) => {
        if (isLogged) {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }
      }).catch((err: any) => {
        loading.dismiss();
        this.showAlert(err);
      })
  }

  onSignUp() {
  	this.navCtrl.push(SignupPage)
  }

   private showLoading(): Loading {
    let loading: Loading = this.loadingCrtl.create({
      content: 'Please Wait...'
    });

    loading.present();
    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['ok'] 
    }).present();
  }

}
