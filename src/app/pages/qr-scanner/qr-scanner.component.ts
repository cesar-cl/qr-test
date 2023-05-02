import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Subject, auditTime, filter, sample, skip } from 'rxjs';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css'],
})
export class QrScannerComponent implements OnInit {
  allowedFormats = [BarcodeFormat.QR_CODE];
  public scannerEnabled = false;
  public result = '';
  public results = new Subject<string>();
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;

  ngOnInit(): void {
    this.results
      .pipe(
        auditTime(600),
        sample(
          this.results.pipe(
            auditTime(610),
            filter((_, i) => i % 3 === 0 && i !== 0)
          )
        )
      )
      .subscribe((value) => {
        console.log(value);
        this.result = value;
        this.scannerEnabled = false;
      });
  }

  scanSuccessHandler(event: string) {
    this.results.next(event);
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach((camera) => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        //  this.scannerEnabled = true;
      }
    });
  }

  changeState() {
    this.scannerEnabled = !this.scannerEnabled;
  }
}
