import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Geolocation } from "@ionic-native/geolocation";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ProtocolPage } from "../pages/protocol/protocol";
import { TrainPage } from "../pages/train/train";
import { IonicStorageModule } from "@ionic/storage";
import { ENGProtocolData } from "../providers/ENGprotocoldata";
import { FRProtocolData } from "../providers/FRprotocoldata";
import { ESProtocolData } from "../providers/ESProtocolData";
import { RUSProtocolData } from "../providers/RUSprotocoldata";
import { InfoModalPage } from "../pages/protocol/infomodal/infomodal";
import { AirwayPage } from "../pages/train/airway/airway";
import { AlertPage } from "../pages/train/alert/alert";
import { CirculationPage } from "../pages/train/circulation/circulation";
import { HeatPage } from "../pages/train/heat/heat";
import { MassivePage } from "../pages/train/massive/massive";
import { MovementPage } from "../pages/train/movement/movement";
import { RespirationPage } from "../pages/train/respiration/respiration";
import { ScenePage } from "../pages/train/scene/scene";
import { NativeAudio } from "@ionic-native/native-audio";
import { TourniquetPage } from "../pages/train/massive/tourniquet/tourniquet";
import { WoundpackingPage } from "../pages/train/massive/woundpacking/woundpacking";
import { HeadtiltPage } from "../pages/train/airway/headtilt/headtilt";
import { RecoverypositionPage } from "../pages/train/airway/recoveryposition/recoveryposition";
import { SitupPage } from "../pages/train/airway/situp/situp";
import { HyperthermiaPage } from "../pages/train/heat/hyperthermia/hyperthermia";
import { HypothermiaPage } from "../pages/train/heat/hypothermia/hypothermia";
import { SettingsPage } from "../pages/settings/settings";
import { BasicsPage } from "../pages/train/basics/basics";
import { LocationService } from "./services/location.service";
import { FirebaseService } from "./services/firebase.service";
import { Device } from "@ionic-native/device";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProtocolPage,
    TrainPage,
    InfoModalPage,
    AirwayPage,
    AlertPage,
    CirculationPage,
    HeatPage,
    MassivePage,
    MovementPage,
    RespirationPage,
    ScenePage,
    BasicsPage,
    TourniquetPage,
    WoundpackingPage,
    HeadtiltPage,
    RecoverypositionPage,
    SitupPage,
    HyperthermiaPage,
    HypothermiaPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: "     ",
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProtocolPage,
    TrainPage,
    InfoModalPage,
    AirwayPage,
    AlertPage,
    CirculationPage,
    HeatPage,
    MassivePage,
    MovementPage,
    RespirationPage,
    ScenePage,
    BasicsPage,
    TourniquetPage,
    WoundpackingPage,
    HeadtiltPage,
    RecoverypositionPage,
    SitupPage,
    HyperthermiaPage,
    HypothermiaPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ENGProtocolData,
    FRProtocolData,
    ESProtocolData,
    RUSProtocolData,
    NativeAudio,
    LocationService,
    FirebaseService,
    Geolocation,
    Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
