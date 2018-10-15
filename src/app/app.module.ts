import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { AddRoomPage } from '../pages/add-room/add-room';

//FCM firebase Cloude Message khong dung hien tai
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

var config = {
  apiKey: "AIzaSyAmlf0OGgPJdJWhUVRpqI9Wi3_pjKb1Lx4",
  authDomain: "ionic-chat-a9db7.firebaseapp.com",
  databaseURL: "https://ionic-chat-a9db7.firebaseio.com",
  projectId: "ionic-chat-a9db7",
  storageBucket: "",
  messagingSenderId: "95653772518"
};
@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    RoomPage,
    AddRoomPage,
    HomePage
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    RoomPage,
    AddRoomPage,
    HomePage
  ],
  providers: [
    Push,
    Firebase,
    FcmProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
