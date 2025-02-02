import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-basics',
  templateUrl: 'basics.html'
})
export class BasicsPage {

  constructor(public storage:Storage, public navCtrl: NavController) {

  }
  ENG = false;
  FR = false;
  ES = false;
  RUS = false;
  ionViewWillEnter(){
    this.storage.get('Language').then(data => 
      {
        console.log(data,'Language BasicsPage')
        if(data === 'ENG'){
          this.ENG = true;
          this.FR = false;
          this.ES = false;
          this.RUS = false;
        }
        if(data === 'FR'){
          this.ENG = false;
          this.ES = false;
          this.FR = true;
          this.RUS = false;
        }
        if(data === 'ES'){
          this.ES = true;
          this.FR = false;
          this.ENG = false;
          this.RUS = false;
        }
        if(data === 'RUS'){
          this.ES = false;
          this.FR = false;
          this.ENG = false;
          this.RUS = true;
        }
      }
    )
  }
  GoBack(){
    this.navCtrl.pop();
  }
}
