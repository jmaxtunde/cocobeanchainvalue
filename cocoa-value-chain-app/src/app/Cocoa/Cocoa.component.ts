/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CocoaService } from './Cocoa.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cocoa',
  templateUrl: './Cocoa.component.html',
  styleUrls: ['./Cocoa.component.css'],
  providers: [CocoaService]
})
export class CocoaComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  cocoaId = new FormControl('', Validators.required);
  assetStatus = new FormControl('', Validators.required);
  quantity = new FormControl('', Validators.required);
  priceFarmer = new FormControl('', Validators.required);
  priceLocalBuyer = new FormControl('', Validators.required);
  priceLicencedBuyer = new FormControl('', Validators.required);
  priceProcessor = new FormControl('', Validators.required);
  priceManufacturer = new FormControl('', Validators.required);
  priceConsumer = new FormControl('', Validators.required);
  cocoachainparticipant = new FormControl('', Validators.required);

  constructor(public serviceCocoa: CocoaService, fb: FormBuilder) {
    this.myForm = fb.group({
      cocoaId: this.cocoaId,
      assetStatus: this.assetStatus,
      quantity: this.quantity,
      priceFarmer: this.priceFarmer,
      priceLocalBuyer: this.priceLocalBuyer,
      priceLicencedBuyer: this.priceLicencedBuyer,
      priceProcessor: this.priceProcessor,
      priceManufacturer: this.priceManufacturer,
      priceConsumer: this.priceConsumer,
      cocoachainparticipant: this.cocoachainparticipant
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCocoa.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.cocoanetwork.Cocoa',
      'cocoaId': this.cocoaId.value,
      'assetStatus': this.assetStatus.value,
      'quantity': this.quantity.value,
      'priceFarmer': this.priceFarmer.value,
      'priceLocalBuyer': this.priceLocalBuyer.value,
      'priceLicencedBuyer': this.priceLicencedBuyer.value,
      'priceProcessor': this.priceProcessor.value,
      'priceManufacturer': this.priceManufacturer.value,
      'priceConsumer': this.priceConsumer.value,
      'cocoachainparticipant': this.cocoachainparticipant.value
    };

    this.myForm.setValue({
      'cocoaId': null,
      'assetStatus': null,
      'quantity': null,
      'priceFarmer': null,
      'priceLocalBuyer': null,
      'priceLicencedBuyer': null,
      'priceProcessor': null,
      'priceManufacturer': null,
      'priceConsumer': null,
      'cocoachainparticipant': null
    });

    return this.serviceCocoa.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'cocoaId': null,
        'assetStatus': null,
        'quantity': null,
        'priceFarmer': null,
        'priceLocalBuyer': null,
        'priceLicencedBuyer': null,
        'priceProcessor': null,
        'priceManufacturer': null,
        'priceConsumer': null,
        'cocoachainparticipant': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.cocoanetwork.Cocoa',
      'assetStatus': this.assetStatus.value,
      'quantity': this.quantity.value,
      'priceFarmer': this.priceFarmer.value,
      'priceLocalBuyer': this.priceLocalBuyer.value,
      'priceLicencedBuyer': this.priceLicencedBuyer.value,
      'priceProcessor': this.priceProcessor.value,
      'priceManufacturer': this.priceManufacturer.value,
      'priceConsumer': this.priceConsumer.value,
      'cocoachainparticipant': this.cocoachainparticipant.value
    };

    return this.serviceCocoa.updateAsset(form.get('cocoaId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceCocoa.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceCocoa.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'cocoaId': null,
        'assetStatus': null,
        'quantity': null,
        'priceFarmer': null,
        'priceLocalBuyer': null,
        'priceLicencedBuyer': null,
        'priceProcessor': null,
        'priceManufacturer': null,
        'priceConsumer': null,
        'cocoachainparticipant': null
      };

      if (result.cocoaId) {
        formObject.cocoaId = result.cocoaId;
      } else {
        formObject.cocoaId = null;
      }

      if (result.assetStatus) {
        formObject.assetStatus = result.assetStatus;
      } else {
        formObject.assetStatus = null;
      }

      if (result.quantity) {
        formObject.quantity = result.quantity;
      } else {
        formObject.quantity = null;
      }

      if (result.priceFarmer) {
        formObject.priceFarmer = result.priceFarmer;
      } else {
        formObject.priceFarmer = null;
      }

      if (result.priceLocalBuyer) {
        formObject.priceLocalBuyer = result.priceLocalBuyer;
      } else {
        formObject.priceLocalBuyer = null;
      }

      if (result.priceLicencedBuyer) {
        formObject.priceLicencedBuyer = result.priceLicencedBuyer;
      } else {
        formObject.priceLicencedBuyer = null;
      }

      if (result.priceProcessor) {
        formObject.priceProcessor = result.priceProcessor;
      } else {
        formObject.priceProcessor = null;
      }

      if (result.priceManufacturer) {
        formObject.priceManufacturer = result.priceManufacturer;
      } else {
        formObject.priceManufacturer = null;
      }

      if (result.priceConsumer) {
        formObject.priceConsumer = result.priceConsumer;
      } else {
        formObject.priceConsumer = null;
      }

      if (result.cocoachainparticipant) {
        formObject.cocoachainparticipant = result.cocoachainparticipant;
      } else {
        formObject.cocoachainparticipant = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'cocoaId': null,
      'assetStatus': null,
      'quantity': null,
      'priceFarmer': null,
      'priceLocalBuyer': null,
      'priceLicencedBuyer': null,
      'priceProcessor': null,
      'priceManufacturer': null,
      'priceConsumer': null,
      'cocoachainparticipant': null
      });
  }

}
