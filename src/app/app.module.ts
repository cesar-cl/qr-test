import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { QrGenerateComponent } from './pages/qr-generate/qr-generate.component';
import { QrScannerComponent } from './pages/qr-scanner/qr-scanner.component';
import { AppRoutingModule } from './app-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [AppComponent, QrGenerateComponent, QrScannerComponent],
  imports: [BrowserModule, QRCodeModule, AppRoutingModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
