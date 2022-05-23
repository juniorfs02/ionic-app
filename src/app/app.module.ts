

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  
  imports: [
  BrowserModule, 
  IonicModule.forRoot(),
  AppRoutingModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  AngularFireAuthModule,
  
],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Keyboard],
  bootstrap: [AppComponent],
})
export class AppModule {}
