import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-movement",
  templateUrl: "movement.html",
})
export class MovementPage {
  constructor(public storage: Storage, public navCtrl: NavController) {}

  RUS = false;
  ENG = false;
  FR = false;
  ES = false;
  ionViewWillEnter() {
    this.storage.get("Language").then((data) => {
      if (data === "ENG") {
        this.ENG = true;
        this.FR = false;
        this.ES = false;
        this.RUS = false;
      }
      if (data === "FR") {
        this.ENG = false;
        this.FR = true;
        this.ES = false;
        this.RUS = false;
      }
      if (data === "ES") {
        this.ENG = false;
        this.FR = false;
        this.ES = true;
        this.RUS = false;
      }
      if (data === "RUS") {
        this.ENG = false;
        this.FR = false;
        this.ES = false;
        this.RUS = true;
      }
    });
  }
  GoBack() {
    this.navCtrl.pop();
  }
}
