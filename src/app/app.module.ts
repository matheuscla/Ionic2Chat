import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { UserService } from '../providers/user/user.service';
import { AuthService } from '../providers/auth/auth.service';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCevQL7jN4iJFbl7YL0rhHQkVPy-lQE-o4",
    authDomain: "ionic-chat-544c6.firebaseapp.com",
    databaseURL: "https://ionic-chat-544c6.firebaseio.com",
    storageBucket: "ionic-chat-544c6.appspot.com",
    messagingSenderId: "553694861113"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}
