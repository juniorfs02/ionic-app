import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { FIREBASE_OPTIONS } from '@angular/fire/compat';

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
  BrowserModule, 
  HttpClientModule,

],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }, { provide: FIREBASE_OPTIONS, useValue: environment.firebase } , Keyboard],
  bootstrap: [AppComponent],
})
export class AppModule {}
