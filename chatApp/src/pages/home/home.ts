import { Component, NgZone, ViewChild } from '@angular/core';
import * as io from 'socket.io-client'
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content)content: Content;
  messages: any = [];
  socket: any;
  chat: any;
  username: string;
  zone: any;


  constructor(public navCtrl: NavController) {
    this.socket = io('http://localhost:3000');
    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("message", (msg) => {
      this.zone.run(() => {
        console.log('message', msg);
        this.messages.push(msg);
        this.content.scrollToBottom();
      })
    })
  }

  chatSend(v) {
    let data = {
      message: v.chatText,
      username: this.username
    };

    this.socket.emit('message', data);
    this.chat = '';
  }

}
