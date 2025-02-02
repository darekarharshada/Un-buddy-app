import { Injectable } from "@angular/core";

import { Storage } from "@ionic/storage";
// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin
import { Geolocation } from "@ionic-native/geolocation";
import { Subject, Subscription } from "rxjs";
// import { FirebaseService } from "./firebase.service";

@Injectable()
export class LocationService {
  public latitude: number;
  public longitude: number;
  public sub1: Subscription;

  public watch: any;
  private locationSubject = new Subject<{
    latitude: number;
    longitude: number;
  }>();
  locationUpdates$ = this.locationSubject.asObservable(); // Expose as Observable

  constructor(
    public storage: Storage,
    public geolocation: Geolocation
  ) // private fbServ: FirebaseService
  {}
  public geolocationEnabled: boolean = false;

  setLocation(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
    // Emit the location update
    this.locationSubject.next({ latitude: lat, longitude: long });
    console.log("Location emitted:", { latitude: lat, longitude: long });
  }

  getLocation() {
    return { latitude: this.latitude, longitude: this.longitude };
  }

  onToggleGeolocation() {
    this.geolocationEnabled = !this.geolocationEnabled;
    console.log(this.geolocationEnabled);
    this.storage.set("geolocationEnabled", this.geolocationEnabled);

    if (this.geolocationEnabled) {
      return this.enableGeolocation();
    } else {
      return this.disableGeolocation();
    }
  }

  enableGeolocationTracking() {
    this.geolocationEnabled = true;
    this.watch = this.geolocation.watchPosition();

    this.sub1 = this.watch.subscribe(
      (data: { coords: { latitude: number; longitude: number } }) => {
        if (data && data.coords) {
          console.log("Updated Latitude:", data.coords.latitude);
          console.log("Updated Longitude:", data.coords.longitude);
          this.setLocation(data.coords.latitude, data.coords.longitude);
        }
      },
      (error) => {
        console.error("Error watching geolocation", error);
      }
    );
  }

  getLastKnownLocation() {
    return { latitude: this.latitude, longitude: this.longitude };
  }

  async enableGeolocation() {
    // const deviceId = await this.storage.get("deviceId");
    this.geolocation
      .getCurrentPosition()
      .then(async (resp) => {
        console.log("Latitude:", resp.coords.latitude);
        console.log("Longitude:", resp.coords.longitude);

        // Store the geolocation in the service
        this.setLocation(resp.coords.latitude, resp.coords.longitude);

        await this.storage.set("lat", resp.coords.latitude);
        await this.storage.set("lon", resp.coords.longitude);
        return true;
      })
      .catch((error) => {
        console.error("Error getting location", error);
        return false;
      });
    // const data = {
    //   lat: await this.storage.get("lat"),
    //   lng: await this.storage.get("lon"),
    // };
    // this.fbServ.uploadDeviceInfo(deviceId, data);
  }

  disableGeolocation() {
    console.log("Geolocation disabled");
    // this.sub1.unsubscribe();
    this.geolocationEnabled = false;
    return false;
    // Implement any additional logic if you need to stop geolocation tracking
  }
  loadGeolocationStatus() {
    this.storage.get("geolocationEnabled").then((status) => {
      if (status !== null) {
        this.geolocationEnabled = status; // Load the saved state
      }
    });
  }
}
