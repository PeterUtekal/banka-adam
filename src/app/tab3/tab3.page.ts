import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(

			 private barcodeScanner: BarcodeScanner,
			 private storage: Storage
  ) { }
		  
  async ngOnInit() {

			 //
			 // demonstrate ionic storage
    await this.storage.create();
    await this.storage.set('name', 'Mr. Ionitron');
	 const name = await this.storage.get('name');

  }

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
		this.storage.set('scannedData', barcodeData);		

    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

}
