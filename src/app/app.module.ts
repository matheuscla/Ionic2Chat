import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';

import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';

import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from '../providers/user/user.service';
import { AuthService } from '../providers/auth/auth.service';

import { CapitalizePipe } from '../pipes/capitalize.pipe';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCevQL7jN4iJFbl7YL0rhHQkVPy-lQE-o4",
    authDomain: "ionic-chat-544c6.firebaseapp.com",
    databaseURL: "https://ionic-chat-544c6.firebaseio.com",
    storageBucket: "ionic-chat-544c6.appspot.com",
    messagingSenderId: "553694861113"
}

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    CapitalizePipe,
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    CustomLoggedHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage
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
