import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrGeneradorComponent } from './qr-generador/qr-generador.component';
import {FormsModule,FormBuilder} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QrGeneradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule
  ],
  exports: [
    
    QrGeneradorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
