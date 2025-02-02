import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AirwayPage } from './airway/airway';
import { AlertPage } from './alert/alert';
import { CirculationPage } from './circulation/circulation';
import { HeatPage } from './heat/heat';
import { MassivePage } from './massive/massive';
import { MovementPage } from './movement/movement';
import { RespirationPage } from './respiration/respiration';
import { ScenePage } from './scene/scene';
import { Storage } from '@ionic/storage';
import { BasicsPage } from './basics/basics';

@Component({
  selector: 'page-train',
  templateUrl: 'train.html'
})
export class TrainPage {

  constructor(public storage:Storage, public navCtrl: NavController) {

  }
ENG = false;
FR = false;
ES = false;
RUS = false;
ionViewWillEnter(){
  this.storage.get('Language').then(data => 
    {
      if(data === 'ENG'){
        this.ENG = true;
        this.FR = false;
        this.ES = false;
        this.RUS = false;
      }else if(data === 'FR'){
        this.ENG = false;
        this.FR = true;
        this.ES = false;
        this.RUS = false;
      }else if(data === 'ES'){
        this.ENG = false;
        this.ES = true;
        this.FR = false;
        this.RUS = false;
        // this.storage.set('Language', 'ENG');
      }else if(data === 'RUS'){
        this.ENG = false;
        this.FR = false;
        this.ES = false;
        this.RUS = true;
      }
    }
  )
}


GotoAirway(){
  this.navCtrl.push(AirwayPage)
}

GotoAlert(){
  this.navCtrl.push(AlertPage)
}

GotoCirculation(){
  this.navCtrl.push(CirculationPage)
}

GotoHeat(){
  this.navCtrl.push(HeatPage)
}

GotoMassive(){
  this.navCtrl.push(MassivePage)
}

GotoMovement(){
  this.navCtrl.push(MovementPage)
}

GotoRespiration(){
  this.navCtrl.push(RespirationPage)
}

GotoScene(){
  this.navCtrl.push(ScenePage)
}

GotoBasics(){
  this.navCtrl.push(BasicsPage)
}
}
