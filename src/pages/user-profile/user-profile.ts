import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../providers/auth/auth.service';
import { UserService } from './../../providers/user/user.service';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  currentUser;
  canEdit: boolean = false;
  private filePhoto;
  public uploadProgress: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public userService: UserService
  ) {
  }

  ionViewDidLoad() {
    this.userService.currentUser
      .subscribe(user => this.currentUser = user);
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.filePhoto) {
      let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);

      uploadTask.on('state_changed', (snapshot) =>{
        this.uploadProgress = Math.round((snapshot.bytesTransferred/ snapshot.totalBytes) * 100)
      }, (error) => {

      }, () => {
        this.editUser(uploadTask.snapshot.downloadURL);
      })
    } else {
      this.editUser();
    }
  }

  onPhoto(event) {
    this.filePhoto = event.target.files[0];
  }

  private editUser(photoUrl?) {
      this.userService
        .edit({name: this.currentUser.name,
              username: this.currentUser.username,
              photo: photoUrl || this.currentUser.photo || ''})
        .then(() => {
          this.canEdit = false;
          this.filePhoto = undefined;
          this.uploadProgress = 0;
        })
  }

}
