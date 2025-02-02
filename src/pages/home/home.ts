import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { ProtocolPage } from "../protocol/protocol";
import { TrainPage } from "../train/train";
import { Storage } from "@ionic/storage";
import { SettingsPage } from "../settings/settings";
// import { Device } from "@ionic-native/device";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  deviceId: string = "";

  constructor(
    // private device: Device,
    public storage: Storage,
    public navCtrl: NavController,
    private alertCtrl: AlertController // Inject AlertController
  ) {}

  StepHistory = [];

  ionViewWillEnter() {
    // this.getDeviceId();

    console.log("ionViewWillEnter");
    this.GetLanguage();
    this.checkFirstLoad(); // Check for first load on page enter

    this.storage.get("StepHistory").then((data) => {
      if (data) {
        this.StepHistory = data;
        console.log("StepHistory exists on homePage   =", this.StepHistory);
      }
    });
  }

  // getDeviceId() {
  //   if (this.device.uuid) {
  //     this.deviceId = this.device.uuid;
  //   } else {
  //     // Mock Device ID for testing
  //     this.deviceId = "mock-device-id";
  //   }
  //   this.storage.set("deviceId", this.deviceId);
  //   console.log("Device ID:", this.deviceId);
  // }

  checkFirstLoad() {
    this.storage.get("isFirstLoad").then((data) => {
      if (data === null) {
        // Show alert if it's the first load
        this.showFirstLoadPopup();

        // Set 'isFirstLoad' to false after showing the popup
        this.storage.set("isFirstLoad", false);
      }
    });
  }

  showFirstLoadPopup() {
    const alert = this.alertCtrl.create({
      title: "Enable Geolocation",
      message:
        "Enable geolocation from Settings in the top-right corner to allow the app to access your location for features like nearby locations or location-based services. Your location will only be used when necessary.",
      buttons: ["OK"],
    });
    alert.present();
  }

  //add 'this.GetLanguage()' to ionViewWillEnter(){}
  ENG = false;
  FR = false;
  ES = false;
  RUS = false;
  GetLanguage() {
    this.storage.get("Language").then((data) => {
      console.log(data, "Language");
      if (data === "ENG") {
        this.ES = false;
        this.ENG = true;
        this.FR = false;
        this.RUS = false;
      } else if (data === "ES") {
        this.ES = true;
        this.ENG = false;
        this.FR = false;
        this.RUS = false;
      } else if (data === "FR") {
        this.ENG = false;
        this.FR = true;
        this.ES = false;
        this.RUS = false;
      } else if (data === "RUS") {
        this.ENG = false;
        this.FR = false;
        this.ES = false;
        this.RUS = true;
      } else {
        this.ENG = true;
        this.ES = false;
        this.FR = false;
        this.RUS = false;
        this.storage.set("Language", "ENG");
      }
    });
  }

  OpenProtocol() {
    this.navCtrl.push(ProtocolPage);
  }

  OpenTraining() {
    this.navCtrl.push(TrainPage);
  }

  GotoSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
