import { Component } from '@angular/core';
import { ModalController, NavController, AlertController, Platform } from 'ionic-angular';
import { ENGProtocolData } from '../../providers/ENGprotocoldata';
import { FRProtocolData } from '../../providers/FRprotocoldata';
import { ESProtocolData } from '../../providers/ESProtocolData';
import { RUSProtocolData } from '../../providers/RUSprotocoldata';
import { InfoModalPage } from './infomodal/infomodal';
import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-protocol',
  templateUrl: 'protocol.html'
})
export class ProtocolPage {

  constructor(private nativeAudio: NativeAudio,
     public platform: Platform , 
     private alertCtrl: AlertController, 
     public storage:Storage, 
     public modalCtrl: ModalController, 
     public ENGdataService: ENGProtocolData, 
     public FRdataService: FRProtocolData,  
     public ESProtocolData: ESProtocolData,  
     public RUSProtocolData:RUSProtocolData,
     public navCtrl: NavController) {

  }
  ios: Boolean;
  android: Boolean;

  ionViewWillEnter(){
    if(this.platform.is('ios')||this.platform.is('android')){
      this.nativeAudio.preloadComplex('Tap', 'assets/audio/Tap.mp3', 0.1, 1, 0)
      }
      else{
      console.log("Platform = not android or ios")
      }
    if(this.platform.is('ios')){
      this.ios = true
      console.log("ios === true")
    }
    if(this.platform.is('android')){
      this.android = true
      console.log("android === true")
    }

      this.storage.get('Language').then(data => 
        {
          if(data === 'ENG'){
            this.ENG = true;
            this.FR = false;
            this.ES = false;
            this.RUS = false;
            this.GetInfo();
          }
          if(data === 'FR'){
            this.ENG = false;
            this.FR = true;
            this.ES = false;
            this.RUS = false;
            this.GetInfo();
          }
          if(data === 'ES') {
            this.ENG = false;
            this.FR = false;
            this.ES = true;
            this.RUS = false;
            this.GetInfo();
          }
          if(data === 'RUS') {
            this.ENG = false;
            this.FR = false;
            this.ES = false;
            this.RUS = true;
            this.GetInfo();
          }
        }
      )

    this.storage.get('StepHistory').then((data) => {
        if(data){
          this.StepHistory = data
          if (this.ENG === true){
            this.presentENGAlert()
          }
          if (this.FR === true){
            this.presentFRAlert()
           }
           if (this.ES === true){
            this.presentESAlert()
           }
           if (this.RUS === true){
            this.presentRUSAlert()
          }
        }
        else{
          this.Step = 0;
          this.StepHistory = [];
        }
        }) 
  }

//Segment
  MARCH: string;
  Language: string;
  ENG = false;
  FR = false;
  ES = false;
  RUS = false;
  Step = 0;
  StepHistory = [];
  InstructionText = '';
  InformationButton = false;
  Information = [];
  InformationPage = false;
  CheckButton = false;
  CheckButtonGoToStepCount: number;
  YesButton = false;
  YesButtonGoToStepCount: number;
  NoButton = false; 
  NoButtonGoToStepCount: number;
  InformationPageName: any;

  presentENGAlert() {
      let alert = this.alertCtrl.create({
        title: 'Resume protocol',
        message: 'Do you want to resume?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.Step = 0;
              this.StepHistory = [];
              this.GetInfo();
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.Step = this.StepHistory.pop();
              this.GetInfo();
            }
          }
        ]
      });
      alert.present();
      }

  presentFRAlert(){
    let alert = this.alertCtrl.create({
      title: 'Protocole de résumé',
      message: 'Voulez-vous résumer ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            this.Step = 0;
            this.StepHistory = [];
            this.GetInfo();
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.Step = this.StepHistory.pop();
            this.GetInfo();
          }
        }
      ]
    });
    alert.present();
    }

    presentESAlert() {
      let alert = this.alertCtrl.create({
        title: 'Reanudar protocolo',
        message: '¿Quieres reanudar?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.Step = 0;
              this.StepHistory = [];
              this.GetInfo();
            }
          },
          {
            text: 'Sí',
            handler: () => {
              this.Step = this.StepHistory.pop();
              this.GetInfo();
            }
          }
        ]
      });
      alert.present();
      }
  
      presentRUSAlert() {
        let alert = this.alertCtrl.create({
          title: 'Протокол возобновления',
          message: 'Хотите возобновить?',
          buttons: [
            {
              text: 'Нет',
              handler: () => {
                this.Step = 0;
                this.StepHistory = [];
                this.GetInfo();
              }
            },
            {
              text: 'Да',
              handler: () => {
                this.Step = this.StepHistory.pop();
                this.GetInfo();
              }
            }
          ]
        });
        alert.present();
        }
  
  CheckClick(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = this.CheckButtonGoToStepCount;
    this.GetInfo();
  }

  YesClick(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = this.YesButtonGoToStepCount;
    this.GetInfo();
  }

  NoClick(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = this.NoButtonGoToStepCount;
    this.GetInfo();
  }

  BackClick(){
    this.nativeAudio.play('Tap')
    if (this.StepHistory.length === 0){
      this.navCtrl.popToRoot();
    }
    else {
      this.Step = this.StepHistory.pop();      
      this.GetInfo();    
    }
  }

  SelectM(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = 6;
    this.GetInfo();
  }
  SelectA(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = 18;
    this.GetInfo();
  }
  SelectR(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = 27;
    this.GetInfo();
  }
  SelectC(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = 33;
    this.GetInfo();
  }
  SelectH(){
    this.nativeAudio.play('Tap')
    this.SetHistory();
    this.Step = 51;
    this.GetInfo();
  }

  SetHistory(){
    if (this.StepHistory[this.StepHistory.length-1] != this.Step){
      this.StepHistory.push(this.Step);
    }
  }

  GetInfo(){
    if (this.ENG === true){
      this.InstructionText = this.ENGdataService.FirstAidProtocol[this.Step].InstructionText
      this.InformationButton = this.ENGdataService.FirstAidProtocol[this.Step].InformationButton
      this.Information = this.ENGdataService.FirstAidProtocol[this.Step].Information
      this.InformationPage = this.ENGdataService.FirstAidProtocol[this.Step].InformationPage
      this.InformationPageName = this.ENGdataService.FirstAidProtocol[this.Step].InformationPageName
      this.CheckButton = this.ENGdataService.FirstAidProtocol[this.Step].CheckButton
      this.CheckButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].CheckButtonGoToStepCount
      this.YesButton = this.ENGdataService.FirstAidProtocol[this.Step].YesButton
      this.YesButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].YesButtonGoToStepCount
      this.NoButton = this.ENGdataService.FirstAidProtocol[this.Step].NoButton
      this.NoButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].NoButtonGoToStepCount
      this.MARCH = this.ENGdataService.FirstAidProtocol[this.Step].MARCH
    }
    if (this.FR === true){
      this.InstructionText = this.FRdataService.FirstAidProtocol[this.Step].InstructionText
      this.InformationButton = this.FRdataService.FirstAidProtocol[this.Step].InformationButton
      this.Information = this.FRdataService.FirstAidProtocol[this.Step].Information
      this.InformationPage = this.FRdataService.FirstAidProtocol[this.Step].InformationPage
      this.InformationPageName = this.FRdataService.FirstAidProtocol[this.Step].InformationPageName
      this.CheckButton = this.FRdataService.FirstAidProtocol[this.Step].CheckButton
      this.CheckButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].CheckButtonGoToStepCount
      this.YesButton = this.FRdataService.FirstAidProtocol[this.Step].YesButton
      this.YesButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].YesButtonGoToStepCount
      this.NoButton = this.FRdataService.FirstAidProtocol[this.Step].NoButton
      this.NoButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].NoButtonGoToStepCount
      this.MARCH = this.FRdataService.FirstAidProtocol[this.Step].MARCH
    }

    if (this.ES === true){
      this.InstructionText = this.ESProtocolData.FirstAidProtocol[this.Step].InstructionText
      this.InformationButton = this.ESProtocolData.FirstAidProtocol[this.Step].InformationButton
      this.Information = this.ESProtocolData.FirstAidProtocol[this.Step].Information
      this.InformationPage = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPage
      this.InformationPageName = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPageName
      this.CheckButton = this.ESProtocolData.FirstAidProtocol[this.Step].CheckButton
      this.CheckButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].CheckButtonGoToStepCount
      this.YesButton = this.ESProtocolData.FirstAidProtocol[this.Step].YesButton
      this.YesButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].YesButtonGoToStepCount
      this.NoButton = this.ESProtocolData.FirstAidProtocol[this.Step].NoButton
      this.NoButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].NoButtonGoToStepCount
      this.MARCH = this.ESProtocolData.FirstAidProtocol[this.Step].MARCH
    }

    if (this.RUS === true){
      this.InstructionText = this.RUSProtocolData.FirstAidProtocol[this.Step].InstructionText
      this.InformationButton = this.RUSProtocolData.FirstAidProtocol[this.Step].InformationButton
      this.Information = this.RUSProtocolData.FirstAidProtocol[this.Step].Information
      this.InformationPage = this.RUSProtocolData.FirstAidProtocol[this.Step].InformationPage
      this.InformationPageName = this.RUSProtocolData.FirstAidProtocol[this.Step].InformationPageName
      this.CheckButton = this.RUSProtocolData.FirstAidProtocol[this.Step].CheckButton
      this.CheckButtonGoToStepCount = this.RUSProtocolData.FirstAidProtocol[this.Step].CheckButtonGoToStepCount
      this.YesButton = this.RUSProtocolData.FirstAidProtocol[this.Step].YesButton
      this.YesButtonGoToStepCount = this.RUSProtocolData.FirstAidProtocol[this.Step].YesButtonGoToStepCount
      this.NoButton = this.RUSProtocolData.FirstAidProtocol[this.Step].NoButton
      this.NoButtonGoToStepCount = this.RUSProtocolData.FirstAidProtocol[this.Step].NoButtonGoToStepCount
      this.MARCH = this.RUSProtocolData.FirstAidProtocol[this.Step].MARCH
    }

  }



  OpenInfo(){
    console.log(this.InformationPage,'this.InformationPage')
    if (this.InformationPage === true){
      console.log(this.InformationPageName,'this.InformationPage')
      let infoModal = this.modalCtrl.create(this.InformationPageName, { Step: this.Step } ) 
      infoModal.present();
    }
    else{
      let infoModal = this.modalCtrl.create(InfoModalPage, { Step: this.Step } ) 
      infoModal.present();
    }
  }

  ionViewWillLeave(){
    if (this.StepHistory.length === 0){
      this.storage.set('StepHistory', null);  
      console.log ("StepHistory WillLeave   =", this.StepHistory)
    }
    else{
      if (this.StepHistory[this.StepHistory.length-1] != this.Step){
        this.StepHistory.push(this.Step);
        this.storage.set('StepHistory', this.StepHistory);  
        console.log ("StepHistory WillLeave   =", this.StepHistory)
      } 
    }
  }


}
