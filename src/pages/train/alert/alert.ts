import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public storage:Storage, public navCtrl: NavController) {

  }

  ENG = false;
  FR = false;
  ES = false;
  RUS = false;
  ionViewWillEnter(){
    this.storage.get('Language').then(data => 
      {
        console.log(data,'Language alert');
        if(data === 'ENG'){
          this.ENG = true;
          this.FR = false;
          this.ES = false;
          this.RUS = false;
        }
        if(data === 'FR'){
          this.ENG = false;
          this.FR = true;
          this.ES = false;
          this.RUS = false;
        }
        if(data === 'ES'){
          this.ENG = false;
          this.FR = false;
          this.ES = true;
          this.RUS = false;
        }
        if(data === 'RUS'){
          this.ENG = false;
          this.FR = false;
          this.ES = false;
          this.RUS = true;
        }
      }
    )
  }

  GoBack(){
    this.navCtrl.pop();
  }
}
