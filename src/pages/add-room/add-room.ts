import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {
  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }
  addRoom() {
    let newData = this.ref.push();
    console.log('newData',newData)
    newData.set({
      roomname:this.data.roomname
    },function (val) {
      console.log('ket qua tra ve set',val)
    });
    this.navCtrl.pop();
  }

}
