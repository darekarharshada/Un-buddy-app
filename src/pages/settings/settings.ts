import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavParams, ModalController, NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Geolocation } from "@ionic-native/geolocation";
import { LocationService } from "../../app/services/location.service";
import { Subscription } from "rxjs";
import { FirebaseService } from "../../app/services/firebase.service";
import { Device } from "@ionic-native/device";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage implements OnInit, OnDestroy {
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public storage: Storage,
    public geolocation: Geolocation,
    public locationService: LocationService,
    private firebaseService: FirebaseService,
    private device: Device
  ) {}

  ENG = false;
  FR = false;
  ES = false;
  RUS = false;
  LanguageSelect: string;
  geolocationEnabled: boolean = false; // This will be bound to the toggle
  geolocationEnabledString = null; // This will be bound to the toggle
  latitude: number | null = null; // Initialize as null to show "Waiting for location data"
  longitude: number | null = null;
  sub1: Subscription;

  ngOnInit(): void {}

  listen() {
    this.sub1 = this.locationService.locationUpdates$.subscribe((location) => {
      // console.log("Received location update:", location); // Debugging log
      this.latitude = location.latitude;
      this.longitude = location.longitude;
    });
  }

  async getDeviceInfo() {
    try {
      // Get Device ID
      const deviceId = this.device.uuid;
      // console.log("deviceId: ", deviceId);

      // Get Current Location
      const resp = await this.geolocation.getCurrentPosition();
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      await this.saveDeviceInfo(deviceId, lat, lng);
    } catch (error) {
      console.log("Error getting location", error);
      this.geolocationEnabled = false;
    }
  }

  async saveDeviceInfo(deviceId: string, lat: number, lng: number) {
    const deviceData = {
      deviceId: deviceId,
      latitude: lat,
      longitude: lng,
      timestamp: new Date().toISOString(), // Optionally add a timestamp
    };

    try {
      await this.firebaseService.addOrUpdateData(
        "deviceInfo",
        deviceData.deviceId,
        deviceData
      );
      // console.log("Device info added successfully!");
    } catch (error) {
      console.error("Error adding device info to Firebase", error);
    }
  }

  ionViewWillLoad() {
    console.log("ionViewWillLoad");
    this.listen();
    if (
      this.geolocationEnabledString === "true" ||
      this.geolocationEnabledString === "false"
    ) {
      if (this.geolocationEnabledString === "true") {
        this.geolocationEnabled = true;
      } else {
        this.geolocationEnabled = false;
      }
    } else {
      this.geolocationEnabled = false;
    }

    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          this.ENG = true;
          this.FR = false;
          this.ES = false;
          this.RUS = false;
        }
        if (data === "ES") {
          this.ENG = false;
          this.ES = true;
          this.FR = false;
          this.RUS = false;
        }
        if (data === "FR") {
          this.ENG = false;
          this.FR = true;
          this.ES = false;
          this.RUS = false;
        }
        if (data === "RUS") {
          this.ENG = false;
          this.FR = false;
          this.ES = false;
          this.RUS = true;
        }
      } else {
        this.ENG = true;
        this.ES = false;
        this.FR = false;
        this.RUS = false;
        this.storage.set("Language", "ENG");
      }

      const lastLocation = this.locationService.getLastKnownLocation();
      if (lastLocation.latitude !== null && lastLocation.longitude !== null) {
        this.latitude = lastLocation.latitude;
        this.longitude = lastLocation.longitude;
      }
    });

    this.locationService.loadGeolocationStatus();
    if (localStorage.getItem("geolocationEnabled") !== null) {
      if (localStorage.getItem("geolocationEnabled") === "true") {
        this.geolocationEnabled = true;
        localStorage.setItem("geolocationEnabled", "true");
      } else if (localStorage.getItem("geolocationEnabled") === "null") {
        this.geolocationEnabled = false;

        // console.log("false here");
        localStorage.setItem("geolocationEnabled", "false");
      } else {
        this.geolocationEnabled = false;
        // console.log("false here");
        localStorage.setItem("geolocationEnabled", "false");
      }
    } else {
      this.geolocationEnabled = false;
      // console.log("false here");
      localStorage.setItem("geolocationEnabled", "false");
    }
  }

  ionViewWillLeave() {}

  ionViewWillUnload() {}

  sendLocationViaWhatsApp() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }
    });
  }

  sendLocationViaSMS() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(`sms:?body=${encodeURIComponent(message)}`, "_blank");
      }
    });
  }

  sendLocationViaMessenger() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const message = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const message = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const message = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        }
      } else {
        const message = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `https://www.facebook.com/messages/t/?text=${encodeURIComponent(
            message
          )}`,
          "_blank"
        );
      }
    });
  }

  async onToggleGeolocation(event: any) {
    const toggeStatus = localStorage.getItem("geolocationEnabled");
    if (toggeStatus === "false") {
      console.log("false");
      this.listen();
      this.locationService.onToggleGeolocation();
      this.locationService.enableGeolocationTracking();
      localStorage.setItem("geolocationEnabled", "true");
      this.getDeviceInfo();
    } else {
      this.sub1.unsubscribe();
      this.locationService.sub1.unsubscribe();
      localStorage.setItem("geolocationEnabled", "false");
    }
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
      if (this.locationService.sub1) {
        this.locationService.sub1.unsubscribe();
      }
      return;
    } else return;
  }

  sendLocationViaEmail() {
    this.storage.get("Language").then((data) => {
      if (data) {
        if (data === "ENG") {
          const subject = "My Current Location";
          const body = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "ES") {
          const subject = "Mi ubicación actual";
          const body = `mi ubicación es: Latitud: ${this.locationService.latitude}, Longitud: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "FR") {
          const subject = "Ma position actuelle";
          const body = `Mon emplacement est: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
        if (data === "RUS") {
          const subject = "Мое текущее местоположение";
          const body = `Мое местоположение: Широта: ${this.locationService.latitude}, Долгота: ${this.locationService.longitude}`;
          window.open(
            `mailto:?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }
      } else {
        const subject = "My Current Location";
        const body = `My location is: Latitude: ${this.locationService.latitude}, Longitude: ${this.locationService.longitude}`;
        window.open(
          `mailto:?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          "_blank"
        );
      }
    });
  }

  onCancel() {
    console.log("OnCancelFired");
  }

  onChange() {
    if (this.LanguageSelect === "ENG") {
      this.ENG = true;
      this.FR = false;
      this.ES = false;
      this.RUS = false;
      this.storage.set("Language", "ENG");
    }
    if (this.LanguageSelect === "ES") {
      this.ENG = false;
      this.ES = true;
      this.FR = false;
      this.RUS = false;
      this.storage.set("Language", "ES");
    }

    if (this.LanguageSelect === "FR") {
      this.ENG = false;
      this.ES = false;
      this.FR = true;
      this.RUS = false;
      this.storage.set("Language", "FR");
    }

    if (this.LanguageSelect === "RUS") {
      this.ENG = false;
      this.ES = false;
      this.FR = false;
      this.RUS = true;
      this.storage.set("Language", "RUS");
    }
  }
}
