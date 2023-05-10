import { Component, ViewChild, ElementRef } from '@angular/core';


import { QRCodeComponent  } from 'angularx-qrcode';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-generador',
  templateUrl: './qr-generador.component.html',
  styleUrls: ['./qr-generador.component.css']
})
export class QrGeneradorComponent {
  @ViewChild('qrcode', { static: true }) qrcode!: QRCodeComponent;
  qrCodeBase64!: string;
  texto1!: string;
  texto2!: string;
  fecha!: Date;
  
  public qrCodeDownloadLink: SafeUrl = "";
  public myAngularxQrCode: string = "";


  generarQR(): void {
    const textoQR = `nombre: ${this.texto1} \n Apellido: ${this.texto2} \n Fecha: ${this.fecha.toString()}`;
    this.myAngularxQrCode = textoQR;
    //this.generarReporte();  
  }

  onChangeURL(url: SafeUrl) {
    let parentElement = null;
    this.qrCodeDownloadLink = url;
    
  }

  

  /* generarReporte(): void {
    const canvas = this.qrcode.qrcElement.nativeElement.querySelector('canvas');
    console.log(canvas);
    // Convertir a base64
    this.qrCodeBase64 = canvas.toDataURL('image/png');
      console.log("qrCodeBase64: ",this.qrCodeBase64);
  } */

}
