import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

import { Platform } from 'ionic-angular';



@Injectable()
export class PushnotificationProvider {

  constructor( private oneSignal: OneSignal,
               public platform: Platform ) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notification(){

    if( this.platform.is('cordova') ){


      this.oneSignal.startInit('1782defa-f095-4d0b-a1cc-702561e5aaeb', '931839935695');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log('Notificacion recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificacion abierta');
      });

      this.oneSignal.endInit();

    }else{
      console.log( 'Esta en crome y no puede usar push' )
    }

  }

}
