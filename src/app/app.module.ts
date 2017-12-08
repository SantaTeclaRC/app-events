import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { ClubsPage } from '../pages/clubs/clubs';
import { Eve1Page } from '../pages/eve1/eve1';
import { Eve2Page } from '../pages/eve2/eve2';
import { Eve3Page } from '../pages/eve3/eve3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Eve1Page,
    Eve2Page,
    Eve3Page,
    HistoryPage,
    ClubsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Eve1Page,
    Eve2Page,
    Eve3Page,
    HistoryPage,
    ClubsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
