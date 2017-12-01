import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FloWi } from './app.component';
import { HubPage } from "../pages/hub/hub";

@NgModule({
  declarations: [
    FloWi,
    HubPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(FloWi)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FloWi,
    HubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
