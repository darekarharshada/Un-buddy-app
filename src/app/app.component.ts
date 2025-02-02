import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if (platform.is('android')) {
        console.log('android')
        statusBar.backgroundColorByHexString('#96b3c4')
      }
      if (platform.is('ios')) {
        console.log('ios')
        statusBar.styleDefault()
      }
    splashScreen.hide();
  });
}
}

