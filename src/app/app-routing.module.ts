import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QrGenerateComponent } from './pages/qr-generate/qr-generate.component';
import { QrScannerComponent } from './pages/qr-scanner/qr-scanner.component';

const routes: Routes = [
  {
    path: 'qr-generator',
    component: QrGenerateComponent,
  },
  {
    path: 'qr-scanner',
    component: QrScannerComponent,
  },
  { path: '**', redirectTo: 'qr-generator' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
