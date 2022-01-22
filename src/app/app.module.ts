import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ProfilComponentComponent } from './profil-component/profil-component.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { TransakciaComponent } from './transakcia/transakcia.component';
import { PlatobnaBranaComponent } from './platobna-brana/platobna-brana.component';
import { FormsModule } from '@angular/forms';
import { ReportyComponent } from './reporty/reporty.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent, ProfilComponentComponent, ProfilEditComponent, TransakciaComponent, PlatobnaBranaComponent, ReportyComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
