///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

//notification
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

var config = {
  apiKey: "AIzaSyAmlf0OGgPJdJWhUVRpqI9Wi3_pjKb1Lx4",
  authDomain: "ionic-chat-a9db7.firebaseapp.com",
  databaseURL: "https://ionic-chat-a9db7.firebaseio.com",
  projectId: "ionic-chat-a9db7",
  storageBucket: "",
  messagingSenderId: "95653772518"
};
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = SigninPage;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              // public fcm: FcmProvider,
              public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // // Get a FCM token
      // fcm.getToken()
      // // Listen to incoming messages
      // fcm.listenToNotifications().pipe(
      //   tap(msg => {
      //     // show a toast
      //     const toast = toastCtrl.create({
      //       message: msg.body,
      //       duration: 3000
      //     });
      //     toast.present();
      //   })
      // ).subscribe()

    });
    firebase.initializeApp(config);
  }
}

