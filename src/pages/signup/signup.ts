import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../providers/user/user.service';
import { AuthService } from './../../providers/auth/auth.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	signupForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
    public loadingCrtl: LoadingController,
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
    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;
    let username: string = formUser.username;

    this.userService.userExists(username)
      .first()
      .subscribe(user => {
        if (!user) {
         this.authService.createAuthUser({
            email: formUser.email,
            password: formUser.password
          }).then(authState => {
               delete formUser.password;
               let uuid: string = authState.auth.uid;

               this.userService.createUser(this.signupForm.value, uuid)
            .then( () => {
              this.navCtrl.setRoot(HomePage);
              loading.dismiss();
            }).catch((err: any) => {
              console.log(err);
              loading.dismiss();
              this.showAlert(err);
            });
          }).catch((err: any) => {
            console.log(err);
            loading.dismiss();
            this.showAlert(err);
          });
        } else {
          this.showAlert(`Username ${username} already been used`);
          loading.dismiss();
        }
      })
 
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
